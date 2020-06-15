const express = require('express')

const app = express()

app.get('/api', (request, response) => {
  response.send('Hello API')
})

app.listen(3000)
