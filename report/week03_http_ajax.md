## HTTP의 Request/Response 구조

웹에서 브라우저(클라이언트)와 서버는 **요청(Request)**과 **응답(Response)**이라는 메시지를 주고받으며 통신합니다.

### HTTP Request 구조

 **Start Line**: 
요청의 메서드: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, CONNECT, TRACE 
요청 URI (Request URI): 요청 대상 리소스의 경로를 나타냅니다. (예: /users, /products/123)

HTTP 버전 (HTTP Version): 클라이언트가 사용하는 HTTP 버전을 나타냅니다. (예: HTTP/1.1, HTTP/2.0)

 **Headers**: 요청에 대한 추가 정보(브라우저 정보, 인증, 데이터 타입 등) <br />
 **CRLF**: 헤더와 바디를 구분하는 개행<br />
 **Body**: 전송할 실제 데이터(주로 POST, PUT 등에서 사용)

### HTTP Response 구조

 **Status Line**: HTTP 버전 (HTTP Version): 서버가 사용하는 HTTP 버전을 나타냅니다.

상태 코드 (Status Code): 요청 처리 결과를 나타내는 3자리 숫자 코드입니다.

2xx (성공): 요청이 성공적으로 처리되었습니다. (예: 200 OK)

3xx (리다이렉션): 요청을 완료하기 위해 추가적인 동작이 필요합니다. (예: 301 Moved Permanently, 302 Found)

4xx (클라이언트 오류): 클라이언트의 요청이 잘못되었습니다. (예: 400 Bad Request, 404 Not Found)

5xx (서버 오류): 서버가 요청을 처리하는 데 실패했습니다. (예: 500 Internal Server Error)

상태 메시지 (Reason Phrase): 상태 코드에 대한 간략한 설명을 제공합니다. (예: OK, Not Found)
 **Headers**: 서버와 응답에 대한 부가 정보를 포함합니다. key-value 쌍으로 구성됩니다.

Server: 응답을 생성한 서버 소프트웨어 정보.

Content-Type: 응답 본문에 포함된 데이터의 미디어 타입.

Content-Length: 응답 본문의 길이.

Set-Cookie: 클라이언트에 설정할 쿠키 정보.

Cache-Control: 캐싱에 대한 지시어.
 **CRLF**: 헤더와 바디를 구분하는 개행
 **Body**: 클라이언트에게 전송되는 실제 데이터입니다.

예를 들어, HTML 문서, 이미지, JSON 데이터 등이 본문에 담겨 전송됩니다.

Content-Type 헤더에 따라 브라우저가 본문을 해석하고 렌더링합니다.

## Ajax, Forward, Redirect 차이

### Ajax

 **정의**: JavaScript를 이용해 웹 페이지를 새로 고침하지 않고, 서버와 비동기적으로 데이터를 주고받는 기술
 **특징**: 전체 페이지가 아닌, 일부 데이터만 갱신 가능. HTTP 요청/응답 구조는 동일하지만, 사용자는 페이지 이동을 인식하지 못함.

### Forward

 **동작 방식**: 서버 내부에서 요청을 다른 리소스(서블릿, JSP 등)로 전달  
   **클라이언트는 URL이 바뀌지 않음**
   **요청(request)와 응답(response) 객체가 그대로 유지**
   **서버 내부에서만 이동**하며, 클라이언트는 이동 사실을 모름
   **주로 조회, 검색 등 데이터 변경이 없는 작업에 사용**

### Redirect

 **동작 방식**: 서버가 클라이언트에게 "다른 URL로 다시 요청해라"라고 지시(HTTP 302 상태코드와 Location 헤더 사용)  
   **클라이언트가 새로운 요청을 보냄**
   **URL이 바뀜**
   **요청/응답 객체가 새로 생성**
   **주로 데이터 변경(글쓰기, 삭제 등) 후 새로고침에 의한 중복 방지 등에서 사용**

### Forward vs Redirect 비교

| 구분        | Forward                                      | Redirect                                      |
|-------------|----------------------------------------------|-----------------------------------------------|
| 처리 위치   | 서버 내부(Web 컨테이너)                      | 클라이언트(브라우저가 새로 요청)              |
| URL 변화    | 바뀌지 않음                                  | 바뀜                                          |
| 요청/응답   | 기존 request/response 객체 유지               | 새 request/response 객체 생성                 |
| 사용 목적   | 데이터 변경 없는 조회, 내부 이동               | 데이터 변경 후 이동, 외부 URL 이동            |
| 속도        | 상대적으로 빠름                              | 상대적으로 느림(두 번의 요청/응답 발생)       |
| 정보 공유   | request에 담긴 정보 공유 가능                 | 정보 공유 불가                                |

