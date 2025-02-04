
export default async function handler(req, res) {
    res.setHeader('Set-Cookie', `token=; HttpOnly; Path=/; Secure; SameSite=Strict; Max-Age=0`);
    return res.status(200).end();
};