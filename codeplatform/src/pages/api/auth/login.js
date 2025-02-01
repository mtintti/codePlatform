/*import database from "../database";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'only posts used' })
    }
    const { username, email, password } = req.body;

    try {
        const db = await database;
        const user = await db.collection('users').findOne({ username, email });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'invalid creds' });
        }
        return res.status(200).json({ username: user.username, email: user.email });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'server error' })
    }
}*/

const { query } = require('../database');
const bcrypt = require('bcrypt');
export default async function handler(req, res) {
  /* console.log("Login API called:", req.body);
 
   if (req.method === "POST") {
     const { username, email, password } = req.body;
 
     // Mock authentication logic
     if (email === "user@example.com" && password === "password") {
       return res.status(200).json({
         id: "123",
         username: "John Doe",
         email: "user@example.com",
       });
     }
 
     return res.status(401).json({ error: "Invalid credentials" });
   }
 
   res.setHeader("Allow", ["POST"]);
   res.status(405).end(`Method ${req.method} Not Allowed`);*/
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const fetchUser = await query(
      'SELECT * FROM users WHERE username = $1', [username]);
    const loggedUser = fetchUser.rows[0];
    if(!loggedUser){
      return res.status(404).json({error: 'User not found in database'});
    }
    
    const passValid = await bcrypt.compare(password, loggedUser.password);
    if(!passValid){
      return res.status(401).json({ error: 'Invalid password.' });
    }

    res.status(200).json({
      user: {
        user_id: loggedUser.user_id,
        username: loggedUser.username,
      },
    });
  } catch (error) {
    console.log('error getting user from database,', error);
    res.status(500);
  }
};
