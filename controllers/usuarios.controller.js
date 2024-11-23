const {response} = require('express');

const usuariosGet = (req, res = response) => {
    const { limite = 5, desde = 0 } = req.query;
    const query = { habilitado: true }
    res.json({
        msg: 'get API',
        limite,
        desde,
        query
    });
}

const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'put API',
        id
    });
}

const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body;
    res.json({
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete API',
        id
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}