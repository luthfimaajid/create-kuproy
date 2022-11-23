const express = require('express');
const geoareaController = require('../controllers/geoarea');

const routes = express.Router();

routes.get("/:id", geoareaController.get);
routes.get("/", geoareaController.getAll);
// routes.get("/", geoareaController.getByGeositeId);
routes.post("/", geoareaController.create);
routes.patch("/:id", geoareaController.update);
routes.delete("/:id", geoareaController.delete);


module.exports = routes;