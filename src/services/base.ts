import { API_URL, TOKEN } from "@/constants/apiUrl";
import axios from "axios";

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    if (TOKEN) {
      config.headers["X-Chat-Token"] = TOKEN;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
