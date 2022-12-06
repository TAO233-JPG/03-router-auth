export type RouteT = {
  id: number;
  pid: number;
  path: string;
  name: string;
  title: string;
  link?: string;
  children?: RouteT[];
};

export type ImportMetaEnvT = {
  VITE_BASE_URL: string;
} & ImportMetaEnv;
