const express = require('express');
const cors = require('cors');
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();    
    }

    middlewares(){

        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
        
    }


    routes() {
        this.app.use('/api/usuarios', require('../routes/usuarios.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }

}

module.exports = Server;