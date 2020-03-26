const connection = require("../database/connection");

module.exports = {
    async list(req, res) {
        const ong_id = req.headers.authorization;
        const incidents = await connection("incidents").where("ong_id", ong_id).select("*");

        if(incidents.length === 0) {
            return res.status(404).json("No incidents found.")
        }

        return res.json(incidents);
    }
}