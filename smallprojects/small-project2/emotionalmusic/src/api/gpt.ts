export const EmotionAdvice = async (userInput: string) => {
  const OpenAI_API_Key = process.env.REACT_APP_OPEN_AI_API_KEY;

  const prompt = `당신은 감정 분석가이자 상담가입니다.
사용자가 말한 문장에서 감정을 짧게 한 단어로 분류한 후,
그 감정에 어울리는 짧은 위로 또는 조언 한 문장을 작성해 주세요.

포맷은 다음과 같이 해주세요:
감정: <감정단어>
한마디: <조언 or 위로 한 문장>

문장: "${userInput}"
`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OpenAI_API_Key}`,
      "Content-Type": "application/json",
    },
  });
};
