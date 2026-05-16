import React, { useEffect, useState, useRef } from "react";
import { FaSmile, FaEllipsisV } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector, useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const Chat = () => {
  const { targetUserId } = useParams();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const userId = user?._id;
  const [messages, setMessages] = useState(""); // Input message
  const [newMessages, setNewMessages] = useState([]); // Message list
  const [onlineUsers, setOnlineUsers] = useState([]); // Track who is online
  const socketRef = useRef(null); // To store the socket instance
  const chatEndRef = useRef(null); // For auto-scrolling to the bottom of the chat

  const fetchChatMessages = async () => {
    try {
      const chat = await axios.get(`${BASE_URL}/chat/${targetUserId}`, {
        withCredentials: true,
      });
      console.log(chat?.data?.[0]?.messages);

      const chatMessages =
        chat?.data?.[0].messages?.map((msg) => {
          return {
            firstName: msg.senderId.firstName,
            //lastName: msg.lastName,
            message: msg?.text,
          };
        }) || [];
      setNewMessages(chatMessages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchChatMessages();
  }, []);

  useEffect(() => {
    if (!userId || !targetUserId) return;

    // Initialize the singleton socket connection
    const socket = createSocketConnection();
    socketRef.current = socket;

    // Join the chat room
    socket.emit("joinChat", { userId, targetUserId });

    // ✅ Use NAMED handler functions so socket.off removes ONLY our specific
    // listener and not all listeners on the singleton socket (avoids receiver bug)
    const handleOnlineUsers = (users) => {
      setOnlineUsers(users);
    };

    const handleMessageReceived = ({ firstName, message }) => {
      // Only the RECEIVER gets this event (backend uses socket.to which excludes sender)
      setNewMessages((prevMessages) => [
        ...prevMessages,
        { firstName, message },
      ]);
    };

    const handleMessageSent = ({ firstName, message }) => {
      // Only the SENDER gets this event (backend uses socket.emit directly to sender)
      setNewMessages((prevMessages) => [
        ...prevMessages,
        { firstName, message },
      ]);
    };

    socket.on("onlineUsers", handleOnlineUsers);
    socket.on("messageReceived", handleMessageReceived);
    socket.on("messageSent", handleMessageSent);

    return () => {
      socket.off("onlineUsers", handleOnlineUsers);
      socket.off("messageReceived", handleMessageReceived);
      socket.off("messageSent", handleMessageSent);
    };
  }, [userId, targetUserId]);

  const sendMessage = () => {
    if (!messages.trim()) return;
    const socket = socketRef.current;
    if (!socket) return;

    // ✅ No optimistic update — server will emit 'messageSent' back to sender
    // This guarantees exactly ONE message appears, with zero duplicates
    socket.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      targetUserId,
      message: messages,
    });
    setMessages("");
  };

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [newMessages]);

  const isOnline = onlineUsers.includes(targetUserId);

  return (
    <div className="bg-gray-900 h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gray-800/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-gray-700 shadow-sm z-10 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-10">
              <span className="text-xl">C</span>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">DevTalk Chat</h1>
            <p className={`text-xs font-medium flex items-center gap-1 ${isOnline ? "text-emerald-400" : "text-gray-400"}`}>
              <span className={`w-2 h-2 rounded-full ${isOnline ? "bg-emerald-400" : "bg-gray-500"}`}></span> 
              {isOnline ? "Online" : "Offline"}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-circle text-gray-400 hover:text-white transition-colors">
          <FaEllipsisV size={18} />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2 bg-gradient-to-b from-gray-900 to-gray-800">
        {newMessages.length === 0 && (
          <div className="flex items-center justify-center h-full text-gray-500 italic">
            Say hi to start the conversation...
          </div>
        )}
        {newMessages.map((msg, index) => {
          const isMe = user.firstName === msg.firstName;
          return (
            <div
              key={index}
              className={`chat ${isMe ? "chat-end" : "chat-start"} animate-fade-in-up`}
            >
              <div className="chat-header text-gray-400 text-xs mb-1">
                {msg.firstName}
              </div>
              <div
                className={`chat-bubble shadow-sm ${
                  isMe ? "chat-bubble-primary bg-blue-600 text-white" : "chat-bubble-neutral bg-gray-700 text-white"
                }`}
              >
                {msg.message}
              </div>
            </div>
          );
        })}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-gray-800 p-3 sm:p-4 flex items-center gap-2 sm:gap-4 border-t border-gray-700 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <button className="btn btn-ghost btn-circle btn-sm text-gray-400 hover:text-white hover:bg-gray-700 transition">
          <FaSmile size={20} />
        </button>
        <input
          type="text"
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a formal message..."
          className="flex-1 bg-gray-900/50 border border-gray-600 text-gray-200 px-4 py-2.5 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all placeholder-gray-500"
        />
        <button
          onClick={sendMessage}
          disabled={!messages.trim()}
          className="btn btn-circle btn-primary btn-sm flex items-center justify-center text-white"
        >
          <IoSend size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
