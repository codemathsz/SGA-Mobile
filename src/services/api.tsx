import axios from "axios";

const API = axios.create({
  baseURL: "http:/192.168.0.42:8080",
});

export default API;
