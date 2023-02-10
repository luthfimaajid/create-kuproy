const fastify = require('fastify')({
  logger: true
})

require('dotenv').config()
const fastifyPrismaClient = require("fastify-prisma-client");

fastify.register(fastifyPrismaClient);
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