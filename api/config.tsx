import axios from "axios";

export default axios.create({
  baseURL: process.env.URL_BACKEND,
  headers: {
    "Content-Type": "application/json",
  },
});
