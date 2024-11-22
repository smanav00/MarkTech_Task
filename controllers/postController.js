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
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalPosts = await Post.countDocuments();
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      totalPosts,
      currentPage: page,
      totalPages: Math.ceil(totalPosts / limit),
      posts,
    });
  } catch (err) {
    res.status(500).json({ error: "Error fetching posts" });
  }
};

module.exports = { createPost, getPosts };
