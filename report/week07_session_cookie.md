# 세션과 쿠키 기반 인증 흐름 이해
웹 애플리케이션에서 사용자의 로그인 상태를 유지하는 것은 매우 중요. 하지만 HTTP 프로토콜 자체는 **무상태(stateless)**이므로, 서버는 사용자의 이전 요청을 기억하지 못함. 따라서 서버와 클라이언트 간에 상태를 유지하기 위한 전략이 필요하며, 대표적인 방법이 **세션(Session)**과 **쿠키(Cookie)**를 이용한 인증임.
### 세션(Session) 기반 인증

서버가 상태(state)를 들고 있습니다.

로그인 성공 시 서버 메모리/Redis/DB 등에 세션 저장 → 그 세션을 식별하는 세션 ID를 쿠키로 내려줌.


### 쿠키(Cookie) 기반 인증

“쿠키 기반”이라는 표현은 엄밀히 말해 둘 다 쿠키를 사용합니다.

보통은 JWT 같은 토큰을 쿠키(또는 로컬스토리지)에 저장하고, 서버는 토큰(서명 검증)만으로 사용자를 식별하는 Stateless(무상태) 패턴을 가리킬 때 많이 씁니다.

![비교사진](https://media.licdn.com/dms/image/v2/C5112AQHwR3nb6tkKFw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1534751281526?e=2147483647&v=beta&t=A6dTw09iXnYp7AoEiPCC9tFOPJ5Seqxk2PtSWDVQD3k)
## 상태 유지 전략: 세션 vs 쿠키
| 특징 | 세션 (Session) | 쿠키 (Cookie) |
|---|---|---|
| 저장 위치 | 서버 | 클라이언트 (브라우저) |
| 데이터 크기 | 무제한 (서버 메모리/DB에 따라) | 제한적 (보통 4KB) |
| 보안 | 비교적 안전 (민감 정보 노출 위험 적음) | 상대적으로 취약 (탈취 및 위변조 위험) |
| 속도 | 서버에 부담을 주어 느려질 수 있음 | 클라이언트에 저장되어 서버 부담 적음 |
| 사용처 | 민감한 정보 (개인정보, 결제 정보 등) | 로그인 상태 유지, 사용자 환경 설정 등 |
### 세션 기반 인증
세션은 서버 측에 사용자의 상태 정보를 저장하는 방식임.
 * 사용자 로그인: 사용자가 아이디와 비밀번호를 입력하여 로그인을 요청함.
 * 세션 생성: 서버는 인증이 성공하면 고유한 세션 ID를 갖는 세션 객체를 서버에 생성함.
 * 세션 ID 발급: 서버는 생성된 세션 ID를 클라이언트에게 전달함. 보통 이 세션 ID는 쿠키에 담겨서 클라이언트의 브라우저에 저장됨.
 * 요청 시 인증: 클라이언트는 이후 서버에 요청을 보낼 때마다 이 세션 ID가 담긴 쿠키를 함께 보냄.
 * 세션 확인: 서버는 클라이언트로부터 받은 세션 ID를 통해 서버에 저장된 세션 객체를 찾아 사용자 정보를 확인함.
 * 응답: 인증이 확인되면 서버는 요청에 대한 응답을 보냄.
### 쿠키 기반 인증
쿠키는 클라이언트 측에 사용자의 상태 정보를 저장하는 방식임.
 * 사용자 로그인: 사용자가 아이디와 비밀번호를 입력하여 로그인을 요청함.
 * 쿠키 생성: 서버는 인증이 성공하면 사용자 정보를 담은 쿠키를 생성함.
 * 쿠키 발급: 서버는 생성된 쿠키를 HTTP 응답 헤더에 담아 클라이언트로 전송함.
 * 쿠키 저장: 클라이언트의 브라우저는 서버로부터 받은 쿠키를 로컬에 저장함.
 * 요청 시 인증: 클라이언트는 이후 서버에 요청을 보낼 때마다 저장된 쿠키를 함께 보냄.
 * 쿠키 확인: 서버는 클라이언트로부터 받은 쿠키를 확인하여 사용자를 인증함.
 * 응답: 인증이 확인되면 서버는 요청에 대한 응답을 보냄.
## 로그인 구조 적용 예시
### 세션 기반 로그인 구조
| 단계 | 클라이언트 (브라우저) | 서버 |
|--------------|-----------------|-----|
| 1. 로그인 요청 | /login 경로로 아이디/비밀번호 POST 요청 |-  |
| 2. 사용자 인증 |-  | DB에서 사용자 정보 확인 및 비밀번호 일치 여부 검증 |
| 3. 세션 생성 | - | 인증 성공 시, session = { 'id': 'user123' }과 같은 세션 객체 생성. 고유한 세션 ID(abcd1234...) 할당 |
| 4. 세션 ID 전달 |  | Set-Cookie 헤더를 통해 세션 ID(JSESSIONID=abcd1234...)를 클라이언트에 전달 |
| 5. 세션 ID 저장 | 쿠키에 JSESSIONID=abcd1234... 저장 |  -|
| 6. 다음 요청 | 세션 ID가 담긴 쿠키를 함께 보냄 |-  |
| 7. 세션 확인 |-  | 클라이언트가 보낸 세션 ID로 서버 메모리에서 세션 객체를 찾아 사용자 정보 확인 |
| 8. 응답 | - | 인증된 사용자 정보에 해당하는 응답을 보냄 |
### 쿠키 기반 로그인 구조
| 단계 | 클라이언트 (브라우저) | 서버 |
|---|---|---|
| 1. 로그인 요청 | /login 경로로 아이디/비밀번호 POST 요청 |  |
| 2. 사용자 인증 |  | DB에서 사용자 정보 확인 및 비밀번호 일치 여부 검증 |
| 3. 쿠키 생성 |  | 인증 성공 시, 사용자 식별 정보가 포함된 쿠키(token=ey...) 생성 (보통 JWT) |
| 4. 쿠키 전달 |  | Set-Cookie 헤더를 통해 token=ey... 쿠키를 클라이언트에 전달 |
| 5. 쿠키 저장 | 브라우저 쿠키 저장소에 token=ey... 저장 |  |
| 6. 다음 요청 | 토큰이 담긴 쿠키를 함께 보냄 |  |
| 7. 쿠키 확인 |  | 클라이언트가 보낸 토큰 쿠키를 검증하여 사용자 정보 확인 |
| 8. 응답 |  | 인증된 사용자 정보에 해당하는 응답을 보냄 |

### 보안 체크리스트 (둘 다 공통적으로 중요)

### 쿠키 옵션

HttpOnly: JS로 접근 불가(XSS 완화)

Secure: HTTPS에서만 전송

SameSite: Lax/Strict로 CSRF 기본 방어 (서드파티 필요 시 None; Secure)


### CSRF 방어

세션 기반: SameSite + CSRF 토큰(Double Submit Cookie / Synchronizer Token) 같이 사용

JWT 쿠키 기반: 위와 동일. 또는 쿠키 대신 Authorization 헤더로 보내고 CSRF를 피하기도 함


### XSS 방지

토큰을 localStorage에 두지 말고 HttpOnly 쿠키로(가능한 경우)

출력/입력 모두 철저한 인코딩 & validation


만료 & 회전

JWT는 짧은 AccessToken + 긴 RefreshToken 조합이 일반적

RefreshToken 탈취 대응: tokenVersion 필드로 강제 무효화
