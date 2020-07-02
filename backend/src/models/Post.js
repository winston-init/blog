const mongoose = require('mongoose')
const Joi = require('@hapi/joi')

const validatePost = post => {
  const schema = Joi.object({
    title: Joi.string().min(2).max(200).required(),
    author: Joi.string().min(2).max(50).required(),
    description: Joi.string().min(5).max(250).required(),
    image: Joi.string(),
    tag: Joi.string(),
    isPublished: Joi.boolean().required(),
  })

  return schema.validate(post)
}

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 200,
  },
  image: String,
  tag: String,
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 250,
  },
  author: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isPublished: {
    type: Boolean,
    required: true,
  },
})

exports.Post = mongoose.model('Post', PostSchema)
exports.validate = validatePost
