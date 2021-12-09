const Server = require('./models/server');

const port = 8080;

const server = new Server(port);

server.listen();