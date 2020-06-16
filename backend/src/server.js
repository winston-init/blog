const express = require('express')

const app = express()

app.use(express.json())

const Joi = require('@hapi/joi')

const clients = [
  { id: 1, name: 'Matheus', age: '18' },
  { id: 2, name: 'Lucas', age: '25' },
]

const validateInput = (schema, objectInput) => schema.validate(objectInput)

app.get('/', (request, response) => {
  response.send('Hello world')
})

app.get('/api', (request, response) => {
  response.send(clients)
})

app.get('/api/:id', (request, response) => {
  const client = clients.find(person => person.id === parseInt(request.params.id))

  if (!client) return response.status(404).send('The given ID was not found...')

  response.send(client)
})

app.post('/api', (request, response) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    age: Joi.number().min(1).required(),
  })

  const { body } = request

  const { error } = validateInput(schema, body)

  if (error) return response.status(400).send(error.message)

  const client = {
    id: clients.length + 1,
    name: body.name,
    age: body.age,
  }

  clients.push(client)

  response.send(clients)
})

app.put('/api/:id', (request, response) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
    age: Joi.number().min(1),
  })

  const { body, params } = request

  const client = clients.find(client => client.id === parseInt(params.id))

  if (!client) return response.status(404).send('The given ID was not found...')

  const { error } = validateInput(schema, body)

  if (error) return response.status(400).send(error.message)

  client.name = body.name || client.name
  client.age = body.age || client.age

  response.send(client)
})

app.delete('/api/:id', (request, response) => {
  const client = clients.find(client => client.id === parseInt(request.params.id))
  if (!client) return response.status(404).send('The given ID was not found...')

  const index = clients.indexOf(client)
  clients.splice(index, 1)

  response.send(client)
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listenning on port ${port}...`))
