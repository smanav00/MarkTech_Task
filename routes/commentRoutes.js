const express = require("express");
const { createComment } = require("../controllers/commentController");
const { authenticateJWT } = require("../middleware/jwtMiddleware");
const router = express.Router();

router.post("/", authenticateJWT, createComment);

module.exports = router;
