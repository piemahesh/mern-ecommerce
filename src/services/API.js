import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const API = axios.create({
  baseURL: BASE_URL,
});
