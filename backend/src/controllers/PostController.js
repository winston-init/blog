const { Post, validate } = require('../models/Post.js')

module.exports = {
  async getPosts(request, response) {
    const { body, query } = request
    const { page = 1 } = query
    const pageSize = 6

    const posts = await Post.find(body)
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .sort({ id: 1 })
      .select()

    return response.send(posts)
  },

  async getPost(request, response) {
    const { body, params } = request

    const post = await Post.findById(params.id)

    if (!post) return response.status(404).send('The given ID was not found...')

    return response.send(post)
  },

  async createPost(request, response) {
    const { body } = request

    const { error } = validate(body)

    if (error) return response.status(400).send(error.message)

    const post = new Post(body)

    try {
      const result = await post.save()
      response.send(result)
    } catch (err) {
      for (field in err.errors)
        return response.send(err.errors[field].properties.message)
    }
  },

  async updatePost(request, response) {
    const { body, params } = request

    const { error } = validate(body)

    if (error) return response.status(400).send(error.message)

    const post = await Post.findOneAndUpdate(
      { _id: params.id },
      { $set: body },
      { new: true },
      (err, result) => {
        if (err) response.status(404).send('The given ID was not found...')
        else response.send(result)
      }
    )

    return response.send(post)
  },

  async deletePost(request, response) {
    const resultsHandler = (error, result) => {
      if (error)
        return response.status(404).send('The given ID was not found...')
      else return response.send(result)
    }

    const post = await Post.findOneAndDelete(
      { _id: request.params.id },
      (err, result) => {
        resultsHandler(err, result)
      }
    )
  },
}
