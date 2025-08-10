const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
  // Connect the client to the server	(optional starting in v4.7)
  await client.connect();
  // Send a ping to confirm a successful connection
  const adminDB = client.db("test").admin();
  const listDatabases = await adminDB.listDatabases();
  console.log(listDatabases);
  return "OK";
}
run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
