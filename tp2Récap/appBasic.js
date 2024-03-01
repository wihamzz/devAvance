const http = require('http');
const routes = require('./routesB')

const server = http.createServer(routes);

server.listen(8000);