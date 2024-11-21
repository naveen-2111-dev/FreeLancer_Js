import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URI;
if (!uri) throw new Error("DATABASE_URI is not defined in environment variables");

let client;
let collectionPromise;

export default async function ConnectDb() {
  if (!collectionPromise) {
    try {
      if (!client) {
        client = new MongoClient(uri);
        await client.connect();
      }
      const db = client.db("User");
      collectionPromise = db.collection("NewUser");
    } catch (err) {
      console.error("Failed to connect to MongoDB:", err);
      throw err;
    }
  }

  return collectionPromise;
}
