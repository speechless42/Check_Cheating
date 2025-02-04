export default async function handler(req, res) {
    const response = await fetch('https://od.moi.gov.tw' + req.url, {
      method: req.method,
    });
  
    const data = await response.json();
    res.status(response.status).json(data);
  }
  