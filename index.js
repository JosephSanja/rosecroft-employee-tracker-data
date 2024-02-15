const jsonServer = require("json-server");//importing json-server library
const server = jsonServer.create();
const router = json.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // chose port from here like 8000,3001

server.use(middlewares);
server.use(router);

server.listen(port);