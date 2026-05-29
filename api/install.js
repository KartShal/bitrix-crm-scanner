const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    // Читаем ваш статический файл install.html
    const filePath = path.join(process.cwd(), 'install.html');
    const html = fs.readFileSync(filePath, 'utf8');
    
    // Отдаем его обратно, успешно обрабатывая POST-запрос
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
};