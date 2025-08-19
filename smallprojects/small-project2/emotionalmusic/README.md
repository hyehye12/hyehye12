# Emotional Music - 감정 기반 음악 추천 서비스

사용자의 감정 상태를 분석하고 그에 맞는 음악을 추천해주는 웹 애플리케이션입니다.

## 주요 기능

- 🎭 **감정 분석**: GPT를 활용한 텍스트 및 일기 감정 분석
- 🎵 **음악 추천**: 감정에 맞는 Spotify 음악 추천
- 📝 **감정 일기**: 감정 상태를 기록하고 분석
- 📊 **대시보드**: 감정 변화 추이 및 통계 시각화
- 👤 **사용자 관리**: 회원가입, 로그인, 개인화된 서비스

## 기술 스택

### Frontend
- React 19
- TypeScript
- Tailwind CSS
- DaisyUI
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT 인증
- OpenAI GPT API
- Itunes

## 설치 및 실행

### 1. 저장소 클론
```bash
git clone <repository-url>
cd emotionalmusic
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경변수 설정
프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
# MongoDB 연결 정보
MONGODB_URI=mongodb://localhost:27017/emotionalmusic

# JWT 시크릿
JWT_SECRET=your_jwt_secret_key_here

# OpenAI API 키
OPENAI_API_KEY=your_openai_api_key_here

# Spotify API 키
SPOTIFY_CLIENT_ID=your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here

# 서버 포트
PORT=5000
```

### 4. MongoDB 설정
로컬 MongoDB를 사용하는 경우:
```bash
# MongoDB 설치 (Windows)
# https://www.mongodb.com/try/download/community 에서 다운로드

# MongoDB 서비스 시작
net start MongoDB

# 또는 MongoDB Compass 사용
```

클라우드 MongoDB 사용 (MongoDB Atlas):
- MongoDB Atlas 계정 생성
- 클러스터 생성
- 연결 문자열을 MONGODB_URI에 설정

### 5. 서버 실행
```bash
npm start
```

### 6. 클라이언트 실행 (새 터미널)
```bash
npm run start
```

## API 엔드포인트

### 인증
- `POST /api/auth/register` - 회원가입
- `POST /api/auth/login` - 로그인
- `GET /api/auth/me` - 현재 사용자 정보

### 일기
- `POST /api/diary` - 일기 작성
- `GET /api/diary` - 일기 목록 조회
- `GET /api/diary/:id` - 특정 일기 조회
- `PUT /api/diary/:id` - 일기 수정
- `DELETE /api/diary/:id` - 일기 삭제

### 음악
- `POST /api/music` - 음악 선택 저장
- `GET /api/music` - 음악 목록 조회
- `GET /api/music/:id` - 특정 음악 조회
- `DELETE /api/music/:id` - 음악 삭제
- `GET /api/music/stats/emotions` - 감정별 음악 통계

### 대시보드
- `GET /api/dashboard` - 대시보드 메인 데이터
- `GET /api/dashboard/emotion-history` - 감정 분석 히스토리
- `GET /api/dashboard/emotion-details/:emotion` - 감정별 상세 통계

### GPT 분석
- `POST /api/gpt/emotion-advice` - 감정 조언
- `POST /api/gpt/analyze-diary` - 일기 분석

### Spotify
- `GET /api/spotify/search/:emotion` - 감정별 음악 검색

## 데이터베이스 스키마

### User (사용자)
- email: 이메일 (고유)
- password: 비밀번호 (해시화)
- username: 사용자명
- createdAt, updatedAt: 타임스탬프

### Diary (일기)
- userId: 사용자 ID (참조)
- content: 일기 내용
- emotion: 감정 상태
- analysis: GPT 분석 결과
- advice: 조언
- encouragement: 격려
- createdAt, updatedAt: 타임스탬프

### Music (음악)
- userId: 사용자 ID (참조)
- trackId: Spotify 트랙 ID
- trackName: 트랙명
- artistName: 아티스트명
- albumName: 앨범명
- albumImage: 앨범 이미지 URL
- previewUrl: 미리듣기 URL
- emotion: 감정 상태
- selectedAt: 선택 시간
- createdAt, updatedAt: 타임스탬프

### EmotionAnalysis (감정 분석)
- userId: 사용자 ID (참조)
- inputText: 입력 텍스트
- detectedEmotion: 감지된 감정
- advice: 조언
- analysisType: 분석 유형 (text/diary)
- createdAt, updatedAt: 타임스탬프

## 개발 가이드

### 새로운 기능 추가
1. 데이터 모델 정의 (`src/models/`)
2. API 라우트 생성 (`src/routes/`)
3. 프론트엔드 컴포넌트 구현
4. API 서비스 연동 (`src/services/`)

### 데이터베이스 마이그레이션
```bash
# 스키마 변경 시
npm run db:migrate

# 시드 데이터 추가
npm run db:seed
```

## 배포

### 환경변수 설정
프로덕션 환경에서는 다음 환경변수를 설정하세요:
- `NODE_ENV=production`
- `MONGODB_URI`: 프로덕션 MongoDB 연결 문자열
- `JWT_SECRET`: 강력한 JWT 시크릿 키

### 빌드
```bash
npm run build
```

## 라이선스

MIT License

## 기여

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요. 