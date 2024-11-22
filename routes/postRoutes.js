const express = require("express");
const { createPost, getPosts } = require("../controllers/postController");
const { authenticateJWT } = require("../middleware/jwtMiddleware");
const router = express.Router();

router.post("/", authenticateJWT, createPost);
router.get("/", getPosts);

module.exports = router;
