const fs = require('fs');
const pause = require('connect-pause');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

//
// Define custom routes (routes.json)
//
var routes = JSON.parse(fs.readFileSync('routes.json'));
server.use(jsonServer.rewriter(routes));


server.use(pause(1000));
server.use(router);
server.listen(8008, () => {
  console.log('JSON Server is running');
});