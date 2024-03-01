const fs = require('fs');

const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;
    console.log(method);
    res.setHeader('Content-Type', 'text/html');
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Saisir un message</title></head>');
        res.write('<body>');
        res.write('<h1>Saisir un mot</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">OK</button></form>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const data = [];
        req.on('data', (paquet)=> {
            console.log(paquet);
            data.push(paquet);
        });
        return req.on('end', ()=>{
            const dataParse = Buffer.concat(data).toString();
            const message = dataParse.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<!doctype html><html lang="fr"');
    res.write('<head><title>Page par defaut</title></head>');
    res.write('<body><h1>Bonjour</h1></body>');
    res.write('</html>');
    res.end();
};
module.exports = requestHandler;