export default function handler(req, res) {
    const userID = 'ba0e3984-ccc9-48a3-8074-b2f507f41ce8'; 
    const url = new URL(req.url, `https://${req.headers.host}`);

    if (url.pathname === `/${userID}`) {
        const vlessConfig = `vless://${userID}@${url.host}:443?encryption=none&security=tls&sni=${url.host}&type=ws&host=${url.host}&path=%2F%40nkka404#Vercel-VLESS-Secure`;
        
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        return res.status(200).send(vlessConfig);
    }

    res.status(404).send('Not Found');
}
