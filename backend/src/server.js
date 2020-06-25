const express = require('express')
const home = require('./routes/home')
const posts = require('./routes/posts')

const morgan = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use('/api', home)
app.use('/api/posts', posts)
app.use(morgan('dev'))
app.use(helmet())

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}

mongoose
  .connect('mongodb://localhost/test', options)
  .then(() => console.log('Database connected...'))
  .catch(err => console.log(err))

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listenning on port ${port}...`))
