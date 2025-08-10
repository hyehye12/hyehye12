const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
// req.body와 POST 요청을 해석하기 위한 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongodbConnection = require("./configs/mongodb-connection");

const postService = require("./services/post-service");

app.engine(
  "handlebars",
  handlebars.create({ helpers: require("./configs/handlebars-helpers") }).engine
);
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("home", { title: "테스트 게시판" });
});

//쓰기 페이지 이동
app.get("/write", (req, res) => {
  res.render("write", { title: "테스트 게시판" });
});

//글쓰기
app.post("./write", async (req, res) => {
  const post = req.body;
  //글쓰기 후 결과 반환
  const result = await postService.writePost(collection, post);
  //생성된 문서의 _id를 사용해 상세페이지로 이동
  res.redirect(`/detail/${result.insetedId}`);
});

app.get("/detail/:id", async (req, res) => {
  res.render("detail", {
    title: "테스트 게시판",
  });
});

app.listen(3000);

let collection;
app.listen(4000, async () => {
  console.log("Server started");
  const MongoClient = await mongodbConnection();
  collection = MongoClient.db("board").collection("post");
  console.log("MongoDB connected");
});
