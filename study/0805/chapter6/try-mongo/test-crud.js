const { MongoClient } = require("mongodb");

const MoncoClient = require("mongodb").MongoClient;

const url = process.env.MONGODB_URI;

const client = new MongoClient(url, { useNewUrlParser: true });

async function main() {
  try {
    await client.connect();
    console.log("MongoDB 접속 성공");

    const collection = client.db("test").collection("person");

    await collection.insertOne({ name: "Tom", age: 20 });
    console.log("문서 추가 완료");

    const documents = await collection.find({ name: "Tom" }).toArray();
    console.log("찾은 문서:", documents);

    await collection.updateOne({ name: "Tom" }, { $set: { age: 21 } });
    console.log("문서 업데이트");

    const updatedDocuments = await collection.find({ name: "Tom" }).toArray();
    console.log("갱신된 문서:", updatedDocuments);

    // await collection.deleteOne({name:'Tom'});
    // console.log('문서 삭제')

    await client.close();
  } catch (err) {
    console.error(err);
  }
}

main();
