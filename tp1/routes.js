const fs = require("fs");

const requestHandler = (req,res) => {

const url = req.url;
const method = req.method;

res.setHeader('Content-type','text/html');

if (url==="/"){
    res.write("<html lang='fr'><head><title>page1</title></head>"
        + "<body><h1>??????</h1></body></html>"
        + "<form action='/message' method='post'>"
        + "<input type='text' name='message'>"
        + "<input type='submit' value='ben'></form>");
    return res.end();
}
if(url==='/message' && method ==="POST") {
    const data = [];
    req.on('data', (paquet) => {
        console.log(paquet);
        data.push(paquet);
    });
    req.on('end', () => {
        const dataParse = Buffer.concat(data).toString();
        const message = dataParse.split('=')[1];
        fs.writeFileSync('message.txt', message);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
}
res.write("<html lang='fr'>");
res.write("<head><title>page2</title></head>" + "<body><h1>!!!!!!</h1></body></html>");
return res.end();

}


module.exports = requestHandler;