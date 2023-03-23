const fastify = require('fastify')({
  logger: true
})
const cors = require('@fastify/cors');

require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
	.catch(error => console.error(error));

fastify.register(require("./src/routes/note"), {prefix: "/api/note"});
fastify.register(cors, {
  origin: '*',
  methods: ["POST", "GET", "PUT", "PATCH", "DELETE"],
})

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()