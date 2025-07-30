// // import { createServer } from "http";
// import express from "express";
// import type { MongoDB } from "./mongodb/connectAndUseDB";
// import { ConnetctAndUseDB } from "./mongodb/connectAndUseDB";

// const hostname = "localhost",
//   port = 3000;

// //prettier-ignore
// const app = express()
// //app.get()
// .get('/', (req, res) => {
//     res.json({message:'Hello express Wolrd!'})
// })

// app.listen(port, () => console.log(`connect http://${hostname}:${port}`));

// import { createServer } from "http";
// import express from "express";
// import { insertTest } from "./test/insertTest";
// import { findTest } from "./test/findTest";

// const hostname = "localhost",
//   port = 3000;

// const app = express();

// app.get("/", (req, res) => {
//   findTest();
//   res.json({ message: "Hello express World!!" });
// });
// app.post("/", (req, res) => {
//   insertTest();
//   res.json({ message: "Hello express World!!" });
// });

// app.put("/", (req, res) => {
//   res.json({ message: "Hello express World!!" });
// });

// app.delete("/", (req, res) => {
//   //
//   res.json({ message: "Hello express World!!" });
// });

// app.listen(port, hostname, () =>
//   console.log(`connect http://${hostname}:${port}`)
// );

// // createServer(app).listen(port, hostname, () =>
// //   console.log(`connect http://${hostname}:${port}`)
// // );

import express from "express";
import { findTest } from "./test/findTest";
import { insertTest } from "./test/insertTest";
const app = express();
app.use(express.json());

let users = [{ id: 1, name: "띵" }];

// GET /users
app.get("/users", (req, res) => {
  findTest();
  res.json(users);
});

// POST /users
app.post("/users", (req, res) => {
  const user = { id: Date.now(), ...req.body };
  insertTest();
  users.push(user);
  res.status(201).json(user);
});

// GET /users/:id
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id);
  if (!user) return res.status(404).send("Not found");
  res.json(user);
});

// PUT /users/:id
app.put("/users/:id", (req, res) => {
  users = users.map((u) => (u.id ? { ...u, ...req.body } : u));
  res.send("Updated");
});

// DELETE /users/:id
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id);
  res.send("Deleted");
});

app.listen(3000, () => console.log("REST API 서버 실행 중"));
