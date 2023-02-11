const express = require('express');
const noteController = require('../controllers/note');

const routes = express.Router();

routes.get("/:id", noteController.get);
routes.get("/", noteController.getAll);
routes.post("/", noteController.create);
routes.patch("/:id", noteController.update);
routes.delete("/:id", noteController.delete);

module.exports = routes