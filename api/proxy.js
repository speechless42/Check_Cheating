export default async function handler(req, res) {
    const { path } = req.query;
    const response = await fetch(`https://od.moi.gov.tw/api/v1/rest/datastore/${path}`, {
        method: req.method,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    res.status(response.status).json(data);
}
