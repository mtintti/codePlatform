/*import database from "../database";

export default async function handler(req, res){
    const {username, email, password} = req.body;
    try{
        const db = await database;

       /* const existing = await db.collection('users').findOne({username, email});
        if(existing){
            return res.status(400).json({message: 'user is aready in database'});
        } //

        await db.collection('users').insertOne({username, email, password});
        return res.status(201).json({message: 'user created'});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
    */
const { query } = require('../database'); // Adjust the path as needed
const bcrypt = require('bcrypt');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const existingUser = await query('SELECT * FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(409).json({ error: 'Email already registered.' });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const result = await query(
            `INSERT INTO users (username, email, password) 
             VALUES ($1, $2, $3) RETURNING user_id, username, email`,
            [username, email, hashedPassword]
        );

        const newUser = result.rows[0];

        res.status(201).json({
            message: 'User registered successfully.',
            user: {
                user_id: newUser.user_id,
                username: newUser.username,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error.' });
    }
};
