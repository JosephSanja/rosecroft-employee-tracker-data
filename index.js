const jsonSever = require("json-server");//importing json-server library
const server = jsonSever.create();
const router = json.router("db.json");
const middlewares = jsonSever.defaults();
const port = process.env.PORT || 8000; // chose port from here like 8000,3001

server.use(middlewares);
server.use(router);

server.listen(port);