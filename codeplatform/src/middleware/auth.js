import jwt from 'jsonwebtoken';

export default function auth(req, res, next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401);
    }

    try {
        const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedUser;
        next();
    } catch (error){
        return res.status(401);
    }
}