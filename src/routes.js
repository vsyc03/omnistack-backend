const express = require("express");
const SessionController = require("./controllers/SessionController");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileContorller = require("./controllers/ProfileController");
const routes = express.Router();

routes.post("/login", SessionController.login);

routes.get("/ongs", OngController.listAll);
routes.post("/ongs", OngController.create);

routes.get("/incidents", IncidentController.listAll);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileContorller.list);
module.exports = routes;