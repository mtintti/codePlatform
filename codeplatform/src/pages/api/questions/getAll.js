
import database from "../database";

export default async function handler(req, res){
    if(req.method === "GET"){
        try {
            const reshandler = await database.query("SELECT * FROM questions");
            res.status(200).json(reshandler.rows);
        } catch (error){
            console.error("During question fetching, ", error);
            res.status(500).json({error: "Serveroo error"});
        }
    } else {
        res.status(405).json({error: "Not an allowed method dude"});
    }
}