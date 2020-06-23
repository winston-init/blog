const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  tags: { type: [String], required: true },
  date: { type: Date, default: Date.now },
  isPublished: { type: Boolean, required: true },
})

module.exports = mongoose.model('Post', PostSchema)
