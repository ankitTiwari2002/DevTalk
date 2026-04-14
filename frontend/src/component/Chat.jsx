import React, { useEffect, useState, useRef } from "react";
import { FaSmile, FaPaperPlane, FaEllipsisV } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const Chat = () => {
  const { targetUserId } = useParams();
  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const [messages, setMessages] = useState(""); // Input message
  const [newMessages, setNewMessages] = useState([]); // Message list
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

    // Initialize the socket connection only once
    const socket = createSocketConnection();
    socketRef.current = socket;

    // Join the chat room
    socket.emit("joinChat", { userId, targetUserId });

    // Listen for incoming messages
    socket.on("messageReceived", ({ firstName, message }) => {
      // Add messages only if they are not sent by the current user
      setNewMessages((prevMessages) => [
        ...prevMessages,
        { firstName, message },
      ]);
    });

    return () => {
      socket.disconnect(); // Disconnect the socket when the component unmounts
    };
  }, [userId, targetUserId]);

  const sendMessage = () => {
    const socket = createSocketConnection();
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

  return (
    <div className="bg-gray-900 h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 p-4 flex items-center justify-between shadow-md">
        <div>
          <h1 className="text-xl font-bold text-blue-400">Chat</h1>
          <p className="text-gray-400 text-sm">You are connected</p>
        </div>
        <button className="text-gray-400 hover:text-gray-300">
          <FaEllipsisV size={20} />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-900">
        {newMessages.map((msg, index) => {
          return (
            <div
              key={index}
              className={`flex ${
                user.firstName === msg.firstName
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`${
                  user.firstName === msg.firstName
                    ? "bg-blue-600"
                    : "bg-gray-800"
                } text-white rounded-lg p-4 max-w-xs shadow-md`}
              >
                <p className="text-base">{msg.message}</p>
                <span className="text-xs text-gray-300 block mt-2 text-right">
                  {msg.firstName}
                </span>
                <div ref={chatEndRef} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Area */}
      <div className="bg-gray-800 p-4 flex items-center gap-3">
        <button className="text-gray-500 hover:text-gray-300">
          <FaSmile size={24} />
        </button>
        <input
          type="text"
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition duration-200"
        >
          <FaPaperPlane size={18} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
