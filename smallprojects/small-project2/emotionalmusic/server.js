const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

// MongoDB 연결
const { connectDB } = require('./src/config/database');

// 라우트 import
const authRoutes = require('./src/routes/auth');
const diaryRoutes = require('./src/routes/diary');
const musicRoutes = require('./src/routes/music');
const dashboardRoutes = require('./src/routes/dashboard');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB 연결
connectDB();

// CORS 설정
app.use(cors());
app.use(express.json());

// 환경변수 (서버에서 관리)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;



// API Routes

// 1. GPT API 프록시 - 감정 분석
app.post('/api/gpt/emotion-advice', async (req, res) => {
  try {
    const { userInput, userId } = req.body;
    
    if (!OPENAI_API_KEY) {
      return res.json({
        emotion: "알 수 없음",
        advice: "API 키가 설정되지 않았습니다."
      });
    }

    const prompt = `당신은 감정 분석가이자 상담가입니다.
사용자가 말한 문장에서 감정을 짧게 한 단어로 분류한 후,
그 감정에 어울리는 짧은 위로 또는 조언 한 문장을 작성해 주세요.

포맷은 다음과 같이 해주세요:
감정: <감정단어>
한마디: <조언 or 위로 한 문장>

문장: "${userInput}"
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
      }),
    });

    const data = await response.json();
    const content = data.choices[0].message.content;

    const emotion = content.match(/감정:\s*(.+)/)?.[1].trim() || "알 수 없음";
    const advice = content.match(/한마디:\s*(.+)/)?.[1].trim() || "마음 잘 챙기세요.";
    
    // 사용자 ID가 있으면 감정 분석 데이터 저장
    if (userId) {
      try {
        const { EmotionAnalysis } = require('./src/models');
        const emotionAnalysis = new EmotionAnalysis({
          userId,
          inputText: userInput,
          detectedEmotion: emotion,
          advice,
          analysisType: 'text'
        });
        await emotionAnalysis.save();
      } catch (dbError) {
        console.error('감정 분석 데이터 저장 실패:', dbError);
      }
    }
    
    res.json({ emotion, advice });
  } catch (error) {
    console.error('GPT API 오류:', error);
    res.status(500).json({
      emotion: "알 수 없음",
      advice: "감정 분석에 실패했어요. 잠시 후 다시 시도해주세요."
    });
  }
});

// 2. GPT API 프록시 - 일기 분석
app.post('/api/gpt/analyze-diary', async (req, res) => {
  try {
    const { diaryText, userId } = req.body;
    
    if (!OPENAI_API_KEY) {
      return res.json({
        emotion: '평온함',
        analysis: 'API 키가 설정되지 않았습니다.',
        advice: '마음을 편안하게 하고, 자신에게 친절하게 대하세요.',
        encouragement: '당신은 충분히 잘하고 있어요. 힘내세요! 💪'
      });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `당신은 따뜻하고 공감적인 감정 상담사입니다. 사용자의 일기를 분석하여 감정을 파악하고, 
            공감과 위로, 그리고 실용적인 조언을 제공해주세요. 
            응답은 다음 JSON 형식으로 해주세요:
            {
              "emotion": "감정 (행복함/우울함/스트레스/설렘/평온함/지침 중 하나)",
              "analysis": "일기에 대한 깊이 있는 분석 (2-3문장)",
              "advice": "실용적인 조언이나 해결책 (2-3문장)",
              "encouragement": "따뜻한 격려나 응원의 말 (1-2문장)"
            }`
          },
          {
            role: 'user',
            content: `다음은 사용자가 작성한 일기입니다. 위의 형식에 맞춰 분석해주세요:\n\n${diaryText}`
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      throw new Error('GPT API 호출 실패');
    }

    const data = await response.json();
    const content = data.choices[0].message.content;
    
    // JSON 파싱
    const result = JSON.parse(content);
    
    // 사용자 ID가 있으면 감정 분석 데이터 저장
    if (userId) {
      try {
        const { EmotionAnalysis } = require('./src/models');
        const emotionAnalysis = new EmotionAnalysis({
          userId,
          inputText: diaryText,
          detectedEmotion: result.emotion,
          advice: result.advice,
          analysisType: 'diary'
        });
        await emotionAnalysis.save();
      } catch (dbError) {
        console.error('일기 분석 데이터 저장 실패:', dbError);
      }
    }
    
    res.json({
      emotion: result.emotion,
      analysis: result.analysis,
      advice: result.advice,
      encouragement: result.encouragement
    });
  } catch (error) {
    console.error('GPT 분석 오류:', error);
    res.status(500).json({
      emotion: '평온함',
      analysis: '일기를 분석하는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      advice: '마음을 편안하게 하고, 자신에게 친절하게 대하세요.',
      encouragement: '당신은 충분히 잘하고 있어요. 힘내세요! 💪'
    });
  }
});


// 3. 헬스 체크
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    apis: {
      openai: !!OPENAI_API_KEY,
      itunes: true // iTunes API는 무료이므로 항상 사용 가능
    }
  });
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다`);
  console.log(`API 상태:`);
  console.log(`- OpenAI: ${OPENAI_API_KEY ? '설정됨' : '설정되지 않음'}`);
  console.log(`- iTunes: 항상 사용 가능 (무료 API)`);
}); 