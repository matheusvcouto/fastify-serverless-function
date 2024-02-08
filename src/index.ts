import fastify, { FastifyRequest } from "fastify"

const app = fastify()

app.get('/', () => {
  return 'Hello'
})

app.post('/teste', (
  req: FastifyRequest<{ Body: { name: string } }>, 
  reply
) => {
  const { name } = req.body
  return `Seu nome é ${name}`
})

app.listen({
  port: 3333,
  host: '0.0.0.0'
}).then(() => {
  console.log('Runing!')
})