const express = require('express');
const userController = require('../controllers/user');

const routes = express.Router();

routes.get("/", userController.getAll);
routes.post("/", userController.create);

module.exports = routes;

