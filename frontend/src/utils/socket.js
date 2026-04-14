import { BASE_URL } from "./constants";
import io from "socket.io-client";

export const createSocketConnection = () => {
  // If BASE_URL ends with '/api', remove it for the socket connection
  const socketUrl = BASE_URL.endsWith("/api") 
    ? BASE_URL.slice(0, -4) 
    : BASE_URL;

  return io(socketUrl, {
    withCredentials: true,
  });
};
