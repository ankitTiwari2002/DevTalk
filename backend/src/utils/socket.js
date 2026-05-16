const socket = require("socket.io");
const crypto = require("crypto");
const { log } = require("console");
const Chat = require("../models/chat");

const getSecretRoomId = (userId, targetUserId) => {
  return crypto
    .createHash("sha256")
    .update([userId, targetUserId].sort().join("_"))
    .digest("hex");
};

// Store mapping of socket.id -> userId
const onlineUsers = new Map();

const initializedSocket = (server) => {
  const io = socket(server, {
    cors: {
      origin: process.env.FRONTEND_URL || "http://localhost:5173",
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    // Globally track the connected user
    socket.on("userConnected", ({ userId }) => {
      onlineUsers.set(socket.id, userId);
      io.emit("onlineUsers", Array.from(new Set(onlineUsers.values())));
    });

    //handle events
    socket.on("joinChat", ({ userId, targetUserId }) => {
      const roomId = getSecretRoomId(userId, targetUserId);
      socket.join(roomId);

      // Track the connected user (fallback if they didn't emit userConnected)
      onlineUsers.set(socket.id, userId);
      // Broadcast unique online users to all clients
      io.emit("onlineUsers", Array.from(new Set(onlineUsers.values())));
    });

    socket.on(
      "sendMessage",
      async ({ firstName, userId, targetUserId, message }) => {
        try {
          const roomId = getSecretRoomId(userId, targetUserId);
          //save messsage to the database
          let chat = await Chat.findOne({
            participents: { $all: [userId, targetUserId] },
          });

          if (!chat) {
            chat = new Chat({ participents: [userId, targetUserId] });
          }

          chat.messages.push({ senderId: userId, text: message });

          await chat.save();

          // ✅ Send ONLY to the receiver (excludes sender)
          socket.to(roomId).emit("messageReceived", { firstName, message });

          // ✅ Send confirmation ONLY to the sender's own socket
          socket.emit("messageSent", { firstName, message });

          // Send global notification to the target user if they are online
          let targetSocketId = null;
          for (let [socketId, usrId] of onlineUsers.entries()) {
            if (usrId === targetUserId) {
              targetSocketId = socketId;
              break;
            }
          }

          if (targetSocketId) {
            io.to(targetSocketId).emit("newNotification", { senderId: userId });
          }

        } catch (err) {
          console.log(err);
        }
      }
    );
    socket.on("disconnect", () => {
      onlineUsers.delete(socket.id);
      io.emit("onlineUsers", Array.from(new Set(onlineUsers.values())));
    });
  });
};

module.exports = initializedSocket;
