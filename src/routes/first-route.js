export default async (fastifyInstance, opt) => {

  const collection = fastifyInstance.mongo.db.collection('test_collection')

  fastifyInstance.get('/', async (request, reply) => {
    return {
      hello: 'world'
    }
  })

  fastifyInstance.get('/animals', async (request, reply) => {
    const result = await collection.find().toArray()

    if (result.length === 0) {
      fastifyInstance.log.error('No documents found')
    }
    return result
  })

  fastifyInstance.get('/animals/:animal', async (request, reply) => {
    const result = await collection.findOne({
      animal: request.params.animal
    })

    if (result === null) {
      fastifyInstance.log.error('Invalid value')
    }
    return result
  })
}