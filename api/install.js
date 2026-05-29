const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    // Читаем переименованный файл
    const filePath = path.join(process.cwd(), 'page-install.html');
    const html = fs.readFileSync(filePath, 'utf8');
    
    // Отдаем его обратно
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
};