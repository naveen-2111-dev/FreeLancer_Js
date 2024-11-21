export default async function POST(req,res){
    try{
        const {firstname,lastname, email, password, country} = req.body;
        if (!firstname || !lastname || !email || !password || !country) {
            return res.status(400).json({ error: "Missing required user fields" });
        }

        
    }catch(err){

    }
}