import axios from "axios";
import { baseURL } from "./config";
console.log(baseURL, "axios.ts");

const axioInstance = axios.create({
  baseURL: baseURL,
  timeout: 6 * 1000,
});

axioInstance.interceptors.request.use((config) => {
  console.log(`axios 请求拦截器`);

  return config;
});

axioInstance.interceptors.response.use((response) => {
  console.log(`axios 响应拦截器`);

  if (response.data.code === 1) {
    return response.data.data;
  }

  return Promise.reject(response.data.data);
});

export default axioInstance;
