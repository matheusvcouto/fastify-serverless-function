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

const port = process.env.PORT ? parseInt(process.env.PORT) : 3333;

app.listen({
  port: port,
  host: '0.0.0.0'
}).then(() => {
  console.log(`Running on port ${port}`);
});
