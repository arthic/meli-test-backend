const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = 8080

        // PATHS
        this.paths = {
            searchMeli: '/api/items'
        }

        // Middlewares
        this.middlewares()
        // Rutas
        this.routes()
    }

    middlewares() {
        // CORS
        this.app.use(cors())
        // Directorio publico
        this.app.use(express.static('public'))
        // Lectura y parseo del body
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.paths.searchMeli, require('../routes/search'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto: ${this.port}`);
        })
    }
}

module.exports = Server