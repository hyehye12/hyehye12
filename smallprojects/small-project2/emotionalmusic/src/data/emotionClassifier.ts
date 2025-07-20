// 감정 분류를 위한 키워드 매핑
const emotionKeywords: { [key: string]: string[] } = {
  "😀": ["행복", "기쁨", "즐거움", "신남", "웃음", "좋아", "최고", "완벽", "대박", "축하", "성공", "승리", "기대", "희망", "긍정"],
  "😢": ["슬픔", "우울", "눈물", "아픔", "상처", "그리움", "외로움", "실패", "실망", "절망", "비통", "허전", "쓸쓸", "서럽"],
  "😡": ["화남", "분노", "짜증", "열받음", "빡침", "스트레스", "답답", "짜증나", "열받아", "빡쳐", "화나", "분노", "격분"],
  "😍": ["사랑", "설렘", "로맨틱", "연애", "하트", "스윗", "달콤", "로맨스", "커플", "데이트", "키스", "포옹", "애정"],
  "😌": ["평온", "차분", "여유", "편안", "안정", "고요", "조용", "평화", "휴식", "마음", "정적", "고요함"],
  "😴": ["졸림", "피곤", "지침", "수면", "잠", "휴식", "편안", "안정", "졸려", "피곤해", "지쳐", "쉬고싶"]
};

// 감정 이모지와 한글 이름 매핑
const emotionNames: { [key: string]: string } = {
  "😀": "행복함",
  "😢": "우울함", 
  "😡": "스트레스",
  "😍": "설렘",
  "😌": "평온함",
  "😴": "지침"
};

/**
 * 입력된 텍스트에서 감정을 분류하는 함수
 * @param text 사용자가 입력한 텍스트
 * @returns 감정 이모지와 한글 이름
 */
export function classifyEmotion(text: string): { emoji: string; name: string } | null {
  if (!text || text.trim() === "") {
    return null;
  }

  const input = text.toLowerCase().trim();
  
  // 각 감정별로 키워드 매칭 점수 계산
  const emotionScores: { [key: string]: number } = {};
  
  Object.entries(emotionKeywords).forEach(([emoji, keywords]) => {
    let score = 0;
    keywords.forEach(keyword => {
      if (input.includes(keyword)) {
        score += 1;
      }
    });
    emotionScores[emoji] = score;
  });
  
  // 가장 높은 점수의 감정 찾기
  const maxScore = Math.max(...Object.values(emotionScores));
  
  if (maxScore === 0) {
    // 키워드가 없으면 기본값으로 행복함 반환
    return { emoji: "😀", name: emotionNames["😀"] };
  }
  
  const topEmotion = Object.keys(emotionScores).find(
    emoji => emotionScores[emoji] === maxScore
  );
  
  if (topEmotion) {
    return { 
      emoji: topEmotion, 
      name: emotionNames[topEmotion] 
    };
  }
  
  return { emoji: "😀", name: emotionNames["😀"] };
}

/**
 * 감정 분류 결과를 보여주는 함수 (디버깅용)
 */
export function debugEmotionClassification(text: string): void {
  const result = classifyEmotion(text);
  console.log(`입력: "${text}"`);
  console.log(`분류 결과: ${result?.emoji} ${result?.name}`);
} 