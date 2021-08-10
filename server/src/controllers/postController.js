const Post = require('../models/Post');

const allPosts = async function (req, res) {
  try {
    let blogPosts = await Post.find({});
    res.send(blogPosts);
  } catch (error) {
    console.log(error);
  }
};

const addPost = async function (req, res) {
  let post = new Post(req.body);

  try {
    let blogPost = await post.save();
    res.status(200).json({ success: 'Post adicionado!' });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { allPosts, addPost };
