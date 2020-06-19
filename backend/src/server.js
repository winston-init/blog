const express = require('express')
const home = require('./routes/home')
const posts = require('./routes/posts')

const app = express()

app.use(express.json())
app.use('/api', home)
app.use('/api/posts', posts)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listenning on port ${port}...`))
