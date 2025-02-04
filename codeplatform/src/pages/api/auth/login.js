
const { query } = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export default async function handler(req, res) {
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
    console.log("User logged, ", loggedUser);
    
    const passValid = await bcrypt.compare(password, loggedUser.password);
    if(!passValid){
      return res.status(401).json({ error: 'Invalid password.' });
    }

    const pload = {user_id: loggedUser.user_id, username: loggedUser.username};

    const token = jwt.sign(pload, process.env.JWT_SECRET, { expiresIn: '3d' });

    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Secure; SameSite=Strict`);

    res.status(200).json({token});
  } catch (error) {
    console.log('error getting user from database,', error);
    res.status(500);
  }
};
