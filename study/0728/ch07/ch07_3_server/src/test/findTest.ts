import * as M from "../mongodb/connectAndUseDB";

const connectCB = async (db: M.MongoDB) => {
  const user = db.collection("user");
  const one = await user.findOne({});
  console.log("one", one);

  const many = user.find({}).toArray();
  console.log("many", many);
};
export const findTest = () => {
  M.ConnetctAndUseDB(connectCB, "mydb");
};

findTest();
