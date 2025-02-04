
import database from "../database";
export default async function handler(req, res) {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: "question_id is required" });
    }

    try {
        const query = `
            SELECT snippet_id, question_id, language, code, created_at
            FROM code_snippets
            WHERE question_id = $1
        `;
        const values = [id];
        const result = await database.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "No code snippets found for this question_id." });
        }

        return res.status(200).json(result.rows);
    } catch (error) {
        console.error("Error fetching code snippets:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
