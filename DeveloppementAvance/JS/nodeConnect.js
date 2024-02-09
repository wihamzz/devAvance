const http = require("http"); //appele un fichier (sorte d'importation)
const script = require("./script.js"); // rajouter ./ quand c'est un fichier
const server = http.createServer((req,res) => {
   res.statusCode=200;
   res.setHeader("Content-type","test/html");
   res.end("<h1>Bonjour</h1>");
   console.log(res.method+" "+req.url);
   console.log(" "+req.headers['user-agent']);
});

const ip = "127.0.0.1";
const port = 5000;

server.listen(port,ip,() => {
    console.log("serveur lancé")
});