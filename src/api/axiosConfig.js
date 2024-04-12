import axios from "axios";

export default axios.create({
  baseURL: "https://b6e9-103-206-112-229.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
