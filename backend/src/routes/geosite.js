const express = require('express');
const geositeController = require('../controllers/geosite');

const routes = express.Router();

routes.get("/:id", geositeController.get);
routes.get("/", geositeController.getAll);
routes.post("/", geositeController.create);
routes.patch("/:id", geositeController.update);
routes.delete("/:id", geositeController.delete);

module.exports = routes;
