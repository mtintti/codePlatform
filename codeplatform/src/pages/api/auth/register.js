
const { query } = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(password)){
        return res.status(401).json({error: "Use a stronger password"});
    }

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const existingUser = await query('SELECT * FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(409).json({ error: 'Email already registered.' });
        }


        const result = await query(
            `INSERT INTO users (username, email, password) 
             VALUES ($1, $2, $3) RETURNING user_id, username, email`,
            [username, email, hashedPassword]
        );

        const newUser = result.rows[0];

        const token = jwt.sign({ user_id: newUser.user_id, username: newUser.username }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Secure; SameSite=Strict`);

        res.status(201).json({
            message: 'User registered!',
            user: {
                user_id: newUser.user_id,
                username: newUser.username,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.error('Error while registering user:', error);
        res.status(500).json({ error: 'server Error.' });
    }
};
