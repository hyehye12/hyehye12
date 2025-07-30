export { default as AppRouter } from './AppRouter';

// 라우트 경로 상수
export const ROUTES = {
  HOME: '/',
  RESULT: '/result/:emotion',
  ANALYSIS: '/analysis/:diaryText',
} as const;

// 라우트 생성 헬퍼 함수
export const createResultRoute = (emotion: string) => `/result/${encodeURIComponent(emotion)}`;
export const createAnalysisRoute = (diaryText: string) => `/analysis/${encodeURIComponent(diaryText)}`;
