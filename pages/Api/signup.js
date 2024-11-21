import ConnectDb from "@/lib/connect";
import bcrypt from "bcryptjs";

export default async function POST(req, res) {
    try {
        const { firstname, lastname, email, password, country } = req.body;

        if (!firstname || !lastname || !email || !password || !country) {
            return res.status(400).json({ error: "Missing required user fields" });
        }

        const hashedPassword = await bcrypt.hash(password, 10); 
        const collection = await ConnectDb();
        const existingUser = await collection.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "Email already exists" });
        }

        const newUser = {
            firstname,
            lastname,
            email,
            password: hashedPassword, 
            country,
        };

        await collection.insertOne(newUser);
        return res.status(201).json({ message: "User successfully created" });
    } catch (err) {
        console.error("Error during sign-up:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
}
