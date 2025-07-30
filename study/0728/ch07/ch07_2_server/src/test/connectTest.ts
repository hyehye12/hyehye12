import * as M from "../mongodb/connectAndUseDB";

const connectCB = (db: M.MongoDB) => {
  console.log("db", db);
};

const connectTest = () => {
  M.ConnetctAndUseDB(connectCB, "mydb");
};

connectTest();
