import type { RouteT } from "@/types/types";
import instance from "./axios";

type LoginParamsT = {
  username: string;
};

// 登录并获取用户可以访问的路由
export const login = async (data: LoginParamsT): Promise<RouteT[]> => {
  const list = await instance.post<any, RouteT[]>("/api/login", data);
  return list;
};
