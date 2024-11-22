const Comment = require("../models/commentModel");

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create({ ...req.body, user: req.user.id });
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createComment };
