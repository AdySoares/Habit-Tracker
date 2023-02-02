import axios from "axios";

export const api = axios.create({
  baseURL: 'http:172.27.176.1:3333'
})