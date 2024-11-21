import { MongoClient } from "mongodb";
const uri = process.env.MONGO_URI;
const Client = new MongoClient(uri);
let signUp;

export default async function Connect(){
    try{
        await Client.connect();
        const DB = Client.db("User");
        signUp = DB.collection("NewUser"); 
    }catch(err){
        console.log("failed to connect: ",err);
    }
    return signUp;
}