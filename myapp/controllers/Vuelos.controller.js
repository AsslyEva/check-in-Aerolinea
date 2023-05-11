const pool = require('../db');

const listarVuelos = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * from sedes");
        res.json(result);

    } catch (error) {
        console.log("Ha ocurrido un error", error);
    }
}

module.exports = {listarVuelos};