const mongoose = require('mongoose')
const Joi = require('@hapi/joi')

const validatePost = post => {
  const schema = Joi.object({
    title: Joi.string().min(2).max(50).required(),
    author: Joi.string().min(2).max(50).required(),
    isPublished: Joi.boolean().required(),
  })

  return schema.validate(post)
}

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  tags: { type: [String] },
  date: { type: Date, default: Date.now },
  isPublished: { type: Boolean, required: true },
})

exports.Post = mongoose.model('Post', PostSchema)
exports.validate = validatePost
