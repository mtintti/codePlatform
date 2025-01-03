import database from "../database";

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === "GET") {
        try {
            const result = await database.query("SELECT * FROM questions WHERE id = $1", [id]);
            if (result.rows.length === 0) {
                res.status(404).json({ error: "Question not found" });
            } else {
                res.status(200).json(result.rows[0]);
            }
        } catch (error) {
            console.error("Error fetching question:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
