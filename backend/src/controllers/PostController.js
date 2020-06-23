const Post = require('../models/Post.js')

module.exports = {
  async getPosts(request, response) {
    const { page = 1 } = request.query
    const pageSize = 10
    // const posts = await Post.paginate({}, { page, limit: 10 })
    const posts = await Post.find(request.body)
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .sort({ id: 1 })
      .select()

    return response.send(posts)
  },

  async getPost(request, response) {
    const post = await Post.findById(request.params.id)

    if (!post) return response.status(404).send('The given ID was not found...')

    return response.send(post)
  },

  async createPost(request, response) {
    const post = new Post(request.body)

    try {
      const result = await post.save()
      response.send(result)
    } catch (err) {
      for (field in err.errors)
        return response.send(err.errors[field].properties.message)
    }
  },

  async updatePost(request, response) {
    const post = await Post.findOneAndUpdate(
      request.params.id,
      {
        $set: request.body,
      },
      { new: true }
    )

    return response.send(post)
  },

  async deletePost(request, response) {
    const post = await Post.findByIdAndDelete(request.params.id)

    return response.send(post)
  },
}
