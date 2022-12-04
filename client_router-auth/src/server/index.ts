import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5173/",
  timeout: 6 * 1000,
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((response) => {
  console.log(response);

  return response;
});
