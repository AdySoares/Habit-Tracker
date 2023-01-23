import axios from "axios";

export const api = axios.create({
  baseURL: 'http:192.168.25.105:3333'
})