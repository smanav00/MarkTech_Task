const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const chatRoutes = require("./routes/chatRoutes");
const connectDB = require("./utils/db");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
// Connect to MongoDB
// connectDB();

// Routes
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use("/chat", chatRoutes(io));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
