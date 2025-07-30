# 💡REST란?
REpresentational State Transfer의 약자.
자원을 URI(Uniform Resource Identifier)로 표현하고,
HTTP 메서드(GET, POST, PUT, DELETE 등)를 사용해 자원을 CRUD하는 아키텍처 스타일.
서버와 클라이언트가 명확히 분리되고, 서버는 상태를 유지하지 않는 Stateless 원칙을 가짐.


## 🧠 REST 원칙 및 HTTP 메서드

### REST 원칙 (REST Constraints)
- 클라이언트-서버(Client-Server): 클라이언트와 서버가 독립적으로 발전할 수 있도록 분리함. 클라이언트는 사용자 인터페이스와 사용자 경험을 담당하고, 서버는 데이터 저장 및 비즈니스 로직을 처리함.

- 무상태성(Stateless): 서버는 클라이언트의 요청 간에 어떠한 클라이언트 상태 정보도 저장하지 않음. 각 요청은 필요한 모든 정보를 자체적으로 포함하고 있어야 함. 이는 서버의 확장성을 높이고 안정성을 향상시킴.

- 캐시 가능(Cacheable): 클라이언트와 서버는 캐시를 사용하여 응답 데이터를 효율적으로 재사용할 수 있음. 이는 네트워크 트래픽을 줄이고 응답 시간을 단축함.

- 계층화 시스템(Layered System): 클라이언트는 중간 계층(프록시, 로드 밸런서 등)의 존재를 인식하지 못하며, 서버는 다양한 계층 뒤에 숨겨질 수 있음. 이는 시스템의 유연성을 높이고 확장성을 제공함.

- 일관된 인터페이스(Uniform Interface): RESTful API의 핵심 원칙 중 하나로, 자원에 대한 조작이 일관되고 예측 가능한 방식으로 이루어져야 함. 이는 다음과 같은 세부 원칙을 포함함.

  - 자원의 식별(Identification of Resources): 모든 자원은 고유한 URI(Uniform Resource Identifier)를 통해 식별됨.

  - 자원의 표현을 통한 조작(Manipulation of Resources Through Representations): 클라이언트는 자원의 표현(JSON, XML 등)을 통해 자원을 생성, 수정, 삭제함.

  - 자기 기술적 메시지(Self-descriptive Messages): 각 메시지는 자신을 해석하는 데 필요한 충분한 정보를 포함해야 함.

  - HATEOAS (Hypermedia As The Engine Of Application State): 애플리케이션의 상태는 하이퍼링크를 통해 전환되어야 함. (선택 사항이지만 REST의 완전한 구현을 위해 중요하게 여겨짐)

- 주문형 코드(Code-On-Demand): (선택 사항) 서버가 클라이언트에게 실행 가능한 코드를 전송하여 클라이언트의 기능을 확장할 수 있음.

### HTTP 메서드와 CRUD 매핑
HTTP 메서드|	역할|	예시 요청|	설명|
|----------|----|----------|--------|
GET	|Read|	GET /users|	특정 자원 또는 자원 컬렉션을 조회함|
POST|	Create	|POST /users|	 새로운 자원을 생성함|
PUT	|Update|	PUT /users/1|	기존 자원을 완전히 대체하거나, 자원이 없으면 새로 생성함|
PATCH	|Update	|PATCH /users/1|기존 자원의 일부를 부분적으로 수정함|
DELETE|	Delete|	DELETE /users/1|	특정 자원을 삭제함|

## 🧠RESTful 엔드포인트 설계 방법

### 명사형 리소스 사용
```GET /users (사용자 목록)``` ,``` POST /users (사용자 생성)```

### 계층적 구조
```GET /users/1/posts (특정 사용자 게시물)```

### 필터링 및 검색
```GET /users?age=20&active=true```

### 상태 코드 활용
```200 OK```,``` 201 Created```,``` 400 Bad Request```, ```404 Not Found```, ```500 Internal Server Error```

### 일관성 유지
동일한 동사 대신 HTTP 메서드를 활용 (예: /createUser 대신 POST /users)

### 버전 관리
API 변경 시 호환성을 유지하기 위해 버전을 명시함.
```/v1/users```,``` /v2/products```

### JSON 형식 사용
데이터 교환 형식으로 JSON(JavaScript Object Notation)을 사용하는 것이 일반적임.

## Express + MongoDB 기반 REST API 예제
```ts
import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
const PORT = 3000;
app.use(express.json());

// MongoDB 연결
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
let usersCollection: any;

client.connect().then(() => {
  const db = client.db("testdb");
  usersCollection = db.collection("users");
  console.log("MongoDB Connected!");
});

// Create (POST /users)
app.post("/users", async (req, res) => {
  const newUser = req.body;
  const result = await usersCollection.insertOne(newUser);
  res.status(201).json(result);
});

// Read (GET /users)
app.get("/users", async (req, res) => {
  const users = await usersCollection.find().toArray();
  res.json(users);
});

// Read One (GET /users/:id)
app.get("/users/:id", async (req, res) => {
  const user = await usersCollection.findOne({ _id: new ObjectId(req.params.id) });
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// Update (PUT /users/:id)
app.put("/users/:id", async (req, res) => {
  const updated = await usersCollection.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.send(updated);
});

// Delete (DELETE /users/:id)
app.delete("/users/:id", async (req, res) => {
  const deleted = await usersCollection.deleteOne({ _id: new ObjectId(req.params.id) });
  res.send(deleted);
});

app.listen(PORT, () => console.log(`REST API Server running on port ${PORT}`));
```
