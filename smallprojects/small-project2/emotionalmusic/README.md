# 🎵 Emotional Music - 감정 기반 음악 추천 서비스

사용자의 일기를 분석하여 감정에 맞는 음악을 추천해주는 웹 애플리케이션입니다.

## ✨ 주요 기능

### 🎯 핵심 기능
- **일기 작성 및 감정 분석**: 3-4줄의 일기를 작성하면 AI가 감정을 분석
- **GPT 기반 감정 상담**: OpenAI GPT를 활용한 깊이 있는 감정 분석 및 조언
- **Spotify 음악 추천**: 분석된 감정에 맞는 음악을 Spotify API를 통해 추천
- **음악 미리듣기**: 추천된 음악의 30초 미리듣기 기능
- **음악 공유**: 추천받은 음악을 소셜미디어에 공유

### 👤 사용자 기능
- **회원가입/로그인**: 개인화된 서비스 이용
- **기분 분석 대시보드**: 주간/월간 기분 변화 추이 및 통계
- **일기 히스토리**: 작성한 일기 목록 및 감정 변화 기록
- **개인화된 추천**: 사용자의 기분 패턴을 학습한 맞춤형 음악 추천

### 🎵 커뮤니티 기능
- **음악 추천 게시판**: 사용자들이 기분별 음악을 추천하고 공유
- **좋아요 시스템**: 추천에 대한 반응 표시
- **감정별 필터링**: 원하는 감정의 음악 추천만 확인

## 🚀 기술 스택

### Frontend
- **React 18** + **TypeScript**
- **Tailwind CSS** - 스타일링
- **React Router** - 라우팅
- **Framer Motion** - 애니메이션

### Backend & API
- **OpenAI GPT API** - 감정 분석 및 상담
- **Spotify Web API** - 음악 검색 및 추천
- **LocalStorage** - 사용자 데이터 저장 (개발용)

### 상태 관리
- **React Hooks** - 커스텀 훅 기반 상태 관리
- **Context API** - 전역 상태 관리

## 📦 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/your-username/emotional-music.git
cd emotional-music
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
`.env` 파일을 생성하고 다음 변수들을 설정하세요:

```env
# OpenAI API 키 (GPT 분석용)
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here

# Spotify API 키 (음악 검색용)
REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id_here
REACT_APP_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
```

### 4. 개발 서버 실행
```bash
npm start
```

브라우저에서 `http://localhost:3000`으로 접속하세요.

## 🔧 API 키 설정 방법

### OpenAI API 키
1. [OpenAI Platform](https://platform.openai.com/)에 가입
2. API 키 생성
3. `.env` 파일에 `REACT_APP_OPENAI_API_KEY`로 설정

### Spotify API 키
1. [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)에 가입
2. 새 앱 생성
3. Client ID와 Client Secret 복사
4. `.env` 파일에 설정

## 📱 사용 방법

### 1. 일기 작성 및 음악 추천
1. 메인 페이지에서 오늘 하루 있었던 일을 3-4줄로 작성
2. "나에게 어울리는 음악 추천받기" 버튼 클릭
3. AI가 감정을 분석하고 맞춤형 음악 추천
4. 추천된 음악 미리듣기 및 Spotify에서 듣기
5. 마음에 드는 음악 공유하기

### 2. AI 감정 상담
1. 일기 작성 후 "AI 감정 분석 및 조언받기" 버튼 클릭
2. GPT가 일기를 깊이 있게 분석
3. 개인화된 조언과 위로 메시지 제공

### 3. 사용자 계정 관리
1. 우측 상단 "로그인" 버튼 클릭
2. 회원가입 또는 로그인
3. 대시보드에서 기분 변화 추이 확인
4. 작성한 일기 히스토리 확인

### 4. 음악 추천 게시판
1. "음악 추천 게시판" 버튼 클릭
2. 감정별 필터링으로 원하는 추천 확인
3. 새로운 음악 추천 작성 및 공유
4. 다른 사용자의 추천에 좋아요 표시

## 🎨 프로젝트 구조

```
src/
├── api/                 # API 서비스
│   └── spotify.ts      # Spotify API 연동
├── components/         # 재사용 가능한 컴포넌트
│   ├── Healing.tsx     # 감정 상담 컴포넌트
│   ├── LoadingSpinner.tsx
│   └── TrackCard.tsx   # 음악 카드 컴포넌트
├── hooks/              # 커스텀 훅
│   ├── useAuth.ts      # 인증 훅
│   ├── useGPTAnalysis.ts # GPT 분석 훅
│   ├── useMusicSearch.ts # 음악 검색 훅
│   ├── useDiaryStore.ts # 일기 저장 훅
│   └── useMoodAnalytics.ts # 기분 분석 훅
├── pages/              # 페이지 컴포넌트
│   ├── MainPage.tsx    # 메인 페이지
│   ├── ResultPage.tsx  # 결과 페이지
│   ├── GPTAnalysisPage.tsx # GPT 분석 페이지
│   ├── AuthPage.tsx    # 인증 페이지
│   ├── DashboardPage.tsx # 대시보드
│   └── MusicBoardPage.tsx # 음악 게시판
├── services/           # 서비스 로직
│   └── authService.ts  # 인증 및 데이터 관리
├── utils/              # 유틸리티 함수
│   ├── emotionAnalyzer.ts # 감정 분석
│   └── gptService.ts   # GPT 서비스
└── router/             # 라우팅
    └── AppRouter.tsx
```

## 🔮 향후 계획

- [ ] **서버 백엔드 구축**: Node.js/Express 또는 Django 백엔드
- [ ] **데이터베이스 연동**: PostgreSQL 또는 MongoDB 연동
- [ ] **실시간 기능**: WebSocket을 활용한 실시간 알림
- [ ] **모바일 앱**: React Native로 모바일 앱 개발
- [ ] **AI 모델 개선**: 더 정확한 감정 분석을 위한 모델 고도화
- [ ] **플레이리스트 생성**: 자동 플레이리스트 생성 기능
- [ ] **소셜 기능**: 친구와 음악 추천 공유

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.

---

**감정에 맞는 음악으로 마음을 위로받아보세요! 🎵💙** 