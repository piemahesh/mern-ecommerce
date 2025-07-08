import axios from "axios";

const BASE_URL = "http://localhost:8080/api";
const PROD_URL = "https://mernstackproject-ten.vercel.app/api";

export const API = axios.create({
  baseURL: PROD_URL,
});
