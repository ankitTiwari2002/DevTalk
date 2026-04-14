export const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  (location.hostname === "localhost"
    ? "http://localhost:7777"
    : "https://devtinder-f4fs.onrender.com/api");
