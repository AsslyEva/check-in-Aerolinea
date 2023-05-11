const auth = require('../middlewares/auth');
const express = require('express');
const router = express.Router();
const {listarVuelos} = require('../controllers/Vuelos.controller');
// import {pool} from "../db.js";

module.exports = () => {
    router.get('/Vuelos/listar', listarVuelos);
    return router;
}
