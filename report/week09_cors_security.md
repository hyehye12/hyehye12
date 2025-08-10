# 🌐 CORS 정책과 웹 보안 기본 개념
## Origin (출처)
정의: 웹 브라우저가 리소스를 요청할 때 기준이 되는 출처 정보.
형식: 프로토콜://도메인:포트
예시:
- https://example.com:443
- http://localhost:3000

 > 두 요청의 Origin이 다르면 Cross-Origin(교차 출처) 요청으로 간주됨.



## 같은 Origin 판단 규칙
비교 요소 |	동일해야 함
|--------|----------|
|프로토콜 (http/https)	| ✅ |
|도메인 (host) |	✅ |
|포트 번호	| ✅ |



---
## CORS (Cross-Origin Resource Sharing)
브라우저에서 다른 Origin에 있는 리소스에 접근할 수 있게 허용하는 웹 표준 정책.

기본적으로 브라우저는 보안상의 이유로 교차 출처 요청을 차단함 (Same-Origin Policy).

서버에서 적절한 응답 헤더를 보내면 허용 가능.



---
## 주요 HTTP 헤더

### 요청(Request) 관련
Origin
브라우저가 요청을 보낼 때 현재 페이지의 Origin을 담아 전송.

- 예: Origin: https://myapp.com



### 응답(Response) 관련
Access-Control-Allow-Origin
요청을 허용할 Origin 지정 (*는 모든 도메인 허용).
- 예: Access-Control-Allow-Origin: https://myapp.com


Access-Control-Allow-Methods
허용할 HTTP 메서드 지정 (예: GET, POST, PUT, DELETE).

Access-Control-Allow-Headers
허용할 커스텀 헤더 지정.

Access-Control-Allow-Credentials
쿠키/인증정보 포함 여부 (true로 설정 시 Access-Control-Allow-Origin은 * 불가).




---
## Preflight 요청
브라우저가 실제 요청 전에, 서버가 해당 요청을 허용하는지 확인하는 사전 요청.

### HTTP 메서드: OPTIONS
발생 조건:
1. 요청 메서드가 GET, POST, HEAD 외의 경우
2. 특정 커스텀 헤더를 포함한 경우 (Content-Type이 application/json 등 기본값이 아닐 때)
3. application/x-www-form-urlencoded, multipart/form-data, text/plain 이외의 Content-Type 사용 시

## Preflight 요청 흐름
1. 브라우저 → 서버: OPTIONS 요청 (Origin, Methods, Headers 포함)
2. 서버 → 브라우저: 허용 여부 응답 (CORS 관련 헤더 포함)
3. 브라우저: 허용되면 실제 요청 전송

![요청 흐름 이미지](https://velog.velcdn.com/images/abc2752/post/4648b9c4-4b7e-4508-a104-6bfdd1b0aa64/image.png)
---
## 웹 보안 기본 개념

Same-Origin Policy: 같은 Origin에서만 리소스 접근 허용하는 브라우저 보안 규칙.

CORS: Same-Origin Policy 예외를 허용하는 표준.

보안 위험:

Access-Control-Allow-Origin: * 사용 시, 인증 정보와 함께 허용하면 CSRF(Cross-Site Request Forgery) 위험 증가.

불필요하게 많은 Origin을 허용하면 데이터 유출 가능.

이미지 출처: https://velog.io/@abc2752/CORS?utm_source=perplexity
