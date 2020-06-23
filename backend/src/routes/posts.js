const express = require('express')
const Joi = require('@hapi/joi')

const router = express.Router()

const PostController = require('../controllers/PostController')

router.get('/', PostController.getPosts)
router.get('/:id', PostController.getPost)
router.post('/', PostController.createPost)
router.put('/:id', PostController.updatePost)
router.delete('/:id', PostController.deletePost)

module.exports = router

// const posts = [
//   {
//     id: 1,
//     title: 'Title 1',
//     content: { text: 'Text 1', image: '' },
//     flags: 'flag1, flag12',
//   },
//   {
//     id: 2,
//     title: 'Title 2',
//     content: { text: 'Text 2', image: '' },
//     flags: 'flag2, flag21',
//   },
// ]

// const validateInput = (schema, objectInput) => schema.validate(objectInput)

// router.get('/', (request, response) => {
//   response.send(posts)
// })

// router.get('/:id', (request, response) => {
//   const post = posts.find(post => post.id === parseInt(request.params.id))

//   if (!post) return response.status(404).send('The given ID was not found...')

//   response.send(post)
// })

// router.post('/', (request, response) => {
//   const schema = Joi.object({
//     name: Joi.string().min(3).required(),
//     age: Joi.number().min(1).required(),
//   })

//   const { body } = request

//   const { error } = validateInput(schema, body)

//   if (error) return response.status(400).send(error.message)

//   const post = {
//     id: posts.length + 1,
//     name: body.name,
//     age: body.age,
//   }

//   posts.push(post)

//   response.send(posts)
// })

// router.put('/:id', (request, response) => {
//   const schema = Joi.object({
//     name: Joi.string().min(3),
//     age: Joi.number().min(1),
//   })

//   const { body, params } = request

//   const post = posts.find(post => post.id === parseInt(params.id))

//   if (!post) return response.status(404).send('The given ID was not found...')

//   const { error } = validateInput(schema, body)

//   if (error) return response.status(400).send(error.message)

//   post.name = body.name || post.name
//   post.age = body.age || post.age

//   response.send(post)
// })

// router.delete('/:id', (request, response) => {
//   const post = posts.find(post => post.id === parseInt(request.params.id))
//   if (!post) return response.status(404).send('The given ID was not found...')

//   const index = posts.indexOf(post)
//   posts.splice(index, 1)

//   response.send(post)
// })
