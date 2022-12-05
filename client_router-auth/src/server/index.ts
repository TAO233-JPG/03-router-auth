import type { RouteT } from "@/types/types";
import axios from "./axios";

type LoginParamsT = {
  username: string;
};

// 登录并获取用户可以访问的路由
export const login = async (data: LoginParamsT): Promise<RouteT[]> => {
  const list = await axios.post<any, RouteT[]>("/login", data);
  return list;
};
