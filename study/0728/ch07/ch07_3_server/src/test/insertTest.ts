import * as M from "../mongodb/connectAndUseDB";

const connectCB = async (db: M.MongoDB) => {
  try {
    const user = db.collection("user");
    try {
      await user.drop();
    } catch (e) {}

    const jack = await user.insertOne({ name: "Jack", age: 32 });
    console.log("jack", jack);
    const janeAndTom = await user.insertMany([
      { name: "Jane", age: 22 },
      { name: "Tom", age: 11 },
    ]);
    console.log("janeAndTom", janeAndTom);
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
  }
};
export const insertTest = () => {
  M.ConnetctAndUseDB(connectCB, "mydb");
};

insertTest();
