import Fastify from 'fastify'
import mongoose from 'mongoose'
import SwaggerPlugin from 'fastify-swagger'

// import Routes from './first-route.js'
import Routes from './routes/routes.js'
import swaggerConfig from './plugins/swagger.js'
// import DBConnector from './db-connector.js'

const fastifyInstance = Fastify({
  logger: true
})
fastifyInstance.register(SwaggerPlugin, swaggerConfig)

Routes.forEach((route) => {
  fastifyInstance.route(route)
})

// fastifyInstance.register(DBConnector)
// fastifyInstance.register(Routes)

const start = async () => {
  try {
    await fastifyInstance.listen(1900, '0.0.0.0')
    fastifyInstance.swagger()
    mongoose.connect('mongodb://127.0.0.1:27017/learn_auth')
    fastifyInstance.log.info(`Server listening on ${fastifyInstance.server.address().port}`)
  } catch (err) {
    fastifyInstance.log.error(err)
    process.exit(1)
  }
}
start()