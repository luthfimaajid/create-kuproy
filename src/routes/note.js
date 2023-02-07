const noteController = require('../controllers/note');

async function routes (fastify, options) {
	fastify.get("/:id", noteController.get);
	fastify.get("/", noteController.getAll);
	fastify.post("/", noteController.create);
	fastify.patch("/:id", noteController.update);
	fastify.delete("/:id", noteController.delete);
}

module.exports = routes
