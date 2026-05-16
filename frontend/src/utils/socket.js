import { BASE_URL } from "./constants";
import io from "socket.io-client";

let socketInstance = null;

export const createSocketConnection = () => {
  if (socketInstance) return socketInstance;

  // If BASE_URL ends with '/api', remove it for the socket connection
  const socketUrl = BASE_URL.endsWith("/api") 
    ? BASE_URL.slice(0, -4) 
    : BASE_URL;

  socketInstance = io(socketUrl, {
    withCredentials: true,
  });

  return socketInstance;
};
