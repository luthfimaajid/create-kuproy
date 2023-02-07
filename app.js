const fastify = require('fastify')({
  logger: true
})

require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
	.catch(error => console.error(error));

fastify.register(require("./src/routes/note"), {prefix: "/api/note"});

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()