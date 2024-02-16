const bodyParser = require('body-parser');
const http = require('http');
const routes = require('./routes')
const express = require('express');
const path = require("path");
const app = express();
const port = 8000;

const defaut = require('./routes/default');
const form = require('./routes/form');

app.set("view engine", "pug");
app.set("views",path.join(__dirname,"views"));


app.listen(port);
app.use(bodyParser.urlencoded({extended : false}));

app.use(defaut);
app.use(form);

app.use(express.static(path.join(__dirname,'public')));
console.log("Serveur démarré sur le port : " + port);


//toujours mettre les erreurs a la fin
app.use((req,res,next)=>{
    console.log("404");
    //res.status(404).sendFile(path.join(__dirname,'views','page404.html'));
    res.status(404).render("page404");
});



