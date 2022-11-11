import axios from "axios";

const API = axios.create({
  baseURL: "http://10.92.198.4:8080",
});

export default API;
