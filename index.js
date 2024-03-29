
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

//
// Define custom routes (routes.json)
//




server.use(router);
server.listen(8080, () => {
  console.log('JSON Server is running');
});