import { Router, Request, Response } from 'express';
import { Diary, EmotionAnalysis } from '../models';
import { auth } from '../middleware/auth';

const router = Router();

// 모든 라우트에 인증 미들웨어 적용
router.use(auth);

// 일기 작성
router.post('/', async (req: Request, res: Response) => {
  try {
    const { content, emotion, analysis, advice, encouragement } = req.body;
    const userId = (req as any).user._id;

    if (!content) {
      return res.status(400).json({ error: '일기 내용을 입력해주세요.' });
    }

    // 일기 저장
    const diary = new Diary({
      userId,
      content,
      emotion,
      analysis,
      advice,
      encouragement
    });

    await diary.save();

    // 감정 분석 데이터 저장
    if (emotion && advice) {
      const emotionAnalysis = new EmotionAnalysis({
        userId,
        inputText: content,
        detectedEmotion: emotion,
        advice,
        analysisType: 'diary'
      });
      await emotionAnalysis.save();
    }

    res.status(201).json({
      message: '일기가 저장되었습니다.',
      diary
    });
  } catch (error) {
    console.error('일기 저장 오류:', error);
    res.status(500).json({ error: '일기 저장에 실패했습니다.' });
  }
});

// 사용자의 모든 일기 조회
router.get('/', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user._id;
    const { page = 1, limit = 10 } = req.query;

    const skip = (Number(page) - 1) * Number(limit);

    const diaries = await Diary.find({ userId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Diary.countDocuments({ userId });

    res.json({
      diaries,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / Number(limit)),
        total,
        hasNext: skip + diaries.length < total,
        hasPrev: Number(page) > 1
      }
    });
  } catch (error) {
    console.error('일기 조회 오류:', error);
    res.status(500).json({ error: '일기 조회에 실패했습니다.' });
  }
});

// 특정 일기 조회
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user._id;

    const diary = await Diary.findOne({ _id: id, userId });

    if (!diary) {
      return res.status(404).json({ error: '일기를 찾을 수 없습니다.' });
    }

    res.json({ diary });
  } catch (error) {
    console.error('일기 조회 오류:', error);
    res.status(500).json({ error: '일기 조회에 실패했습니다.' });
  }
});

// 일기 수정
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user._id;
    const { content, emotion, analysis, advice, encouragement } = req.body;

    const diary = await Diary.findOne({ _id: id, userId });

    if (!diary) {
      return res.status(404).json({ error: '일기를 찾을 수 없습니다.' });
    }

    // 일기 업데이트
    diary.content = content || diary.content;
    diary.emotion = emotion || diary.emotion;
    diary.analysis = analysis || diary.analysis;
    diary.advice = advice || diary.advice;
    diary.encouragement = encouragement || diary.encouragement;

    await diary.save();

    res.json({
      message: '일기가 수정되었습니다.',
      diary
    });
  } catch (error) {
    console.error('일기 수정 오류:', error);
    res.status(500).json({ error: '일기 수정에 실패했습니다.' });
  }
});

// 일기 삭제
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user._id;

    const diary = await Diary.findOne({ _id: id, userId });

    if (!diary) {
      return res.status(404).json({ error: '일기를 찾을 수 없습니다.' });
    }

    await Diary.findByIdAndDelete(id);

    res.json({ message: '일기가 삭제되었습니다.' });
  } catch (error) {
    console.error('일기 삭제 오류:', error);
    res.status(500).json({ error: '일기 삭제에 실패했습니다.' });
  }
});

export default router;
