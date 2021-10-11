import FastifyPlugin from 'fastify-plugin'
import Mongo from 'fastify-mongodb'

export default FastifyPlugin(async (fastifyInstance, opt) => {
  fastifyInstance.register(Mongo, {
    url: 'mongodb://127.0.0.1:27017/learn_auth'
  })
})