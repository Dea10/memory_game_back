const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
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
            console.log(`Server listening at http://localhost:${process.env.PORT}`);
        })
    }
}

module.exports = Server;