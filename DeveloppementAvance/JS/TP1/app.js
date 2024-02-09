const http = require('http');
const port = 8000;

function reqListener(req,req){
    console.log("serveur démarré");
    console.log(req);
}

const server = http.createServer(reqListener);
server.listen(port);