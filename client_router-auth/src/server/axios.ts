import axios from "axios";

axios.create({
  baseURL: "http://127.0.0.1:5173/",
  timeout: 6 * 1000,
});

axios.interceptors.request.use((config) => {
  console.log(`axios 请求拦截器`);

  return config;
});

axios.interceptors.response.use((response) => {
  console.log(`axios 响应拦截器`);

  console.log(response);
  if (response.data.code === 1) {
    return response.data.data;
  }

  return Promise.reject(response.data.data);
});

export default axios;
