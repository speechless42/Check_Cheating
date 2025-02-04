export default async function handler(req, res) {
    const { path } = req.query;
    if (!path) {
        return res.status(400).json({ error: 'Missing path parameter' });
    }
    const response = await fetch(`https://od.moi.gov.tw/api/v1/rest/datastore/${path}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0' // 避免 API 返回 HTML
        }
    });

    const data = await response.json();
    res.status(response.status).json(data);
}
