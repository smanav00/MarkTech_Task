const Post = require("../models/postModel");

const createPost = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, user: req.user.id });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPosts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const posts = await Post.find()
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  res.json(posts);
};

module.exports = { createPost, getPosts };
