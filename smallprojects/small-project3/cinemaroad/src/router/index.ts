export { default as AppRouter } from './AppRouter';

// 라우트 경로 상수
export const ROUTES = {
  HOME: '/',
  MOVIE_DETAIL: '/movie/:id',
} as const;

// 라우트 생성 헬퍼 함수
export const createMovieDetailRoute = (movieId: number) => `/movie/${movieId}`; 