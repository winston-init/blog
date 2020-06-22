const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Databse connected...')
})

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  tags: { type: [String], required: true },
  date: { type: Date, default: Date.now },
  isPublished: { type: Boolean, required: true },
})

const Post = mongoose.model('Post', postSchema)

async function createPost() {
  const post = new Post({
    title: 'Update 1.0',
    author: 'Winston',
    tags: ['update', 'version'],
    isPublished: true,
  })

  const result = await post.save()
  console.log(result)
}

async function getPosts() {
  const pageNumber = 1
  const pageSize = 10

  const posts = await Post.find({ author: 'Winston', isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ title: 1 })
    .countDocuments()

  console.log(posts)
}

async function updatePost(id) {
  const post = await Post.findByIdAndUpdate(
    id,
    {
      $set: { title: 'Jack', isPublished: false },
    },
    { new: true }
  )
  console.log(post)
}

async function removePost(id) {
  const result = await Post.findByIdAndRemove(id)
  console.log(result)
}

removePost('5eee8c84d71bb20c277794f2')
