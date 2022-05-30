const express = require('express');
const cors = require('cors');
const path = require('path');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.app.get('/items', function(req, res) {
            res.sendFile(path.join(__dirname, '..', 'public/index.html'), function(err) {
                if (err) {
                    res.status(500).send(err)
                }
            })
        })
        this.app.get('/items/*', function(req, res) {
            res.sendFile(path.join(__dirname, '..', 'public/index.html'), function(err) {
                if (err) {
                    res.status(500).send(err)
                }
            })
        })

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