const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor(port) {
        this.app = express();
        this.port = port;
        this.playersPath = '/api/players';

        // Database
        this.connectDb();
    
        // Middlewares
        this.middlewares();
    
        // Routes
        this.routes();
    }

    async connectDb() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.playersPath, require('../routes/players'));
    }

    listen() {
        this.app.listen(this.port, ()=> {
            console.log(`Server listening at http://localhost:${this.port}`);
        })
    }
}

module.exports = Server;