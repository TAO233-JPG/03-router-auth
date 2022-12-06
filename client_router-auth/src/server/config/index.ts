import { proBaseURL } from "./pro";
import { devBaseURL } from "./dev";

console.log(import.meta.env);

const isDev: boolean = import.meta.env.DEV;

// const baseURL: string = "http://127.0.0.1:3000/";
const baseURL: string = isDev ? devBaseURL : proBaseURL;
console.log(baseURL);

export { baseURL };
