module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    //joining a room for post notifications
    socket.on("join post", (postId) => {
      socket.join(postId);
      console.log(`User ${socket.id} joined post room: ${postId}`);
    });

    //sending a new comment notification
    socket.on("new comment", ({ postId, comment }) => {
      console.log(`New comment on post ${postId}: ${comment}`);
      io.to(postId).emit("new comment", comment); // Notify all users in the room
    });

    // real-time chat messages
    socket.on("chat message", (msg) => {
      console.log(`Chat message received: ${msg}`);
      io.emit("chat message", msg); // Broadcast to all connected clients
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected", socket.id);
    });
  });

  return (req, res) => res.send("Chat WebSocket is live.");
};
