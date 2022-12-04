type UserT = {
  id: number;
  username: string;
  auth: number[];
};

const users: UserT[] = [
  {
    id: 1,
    username: "张三",
    auth: [2, 3, 6, 7],
  },
  {
    id: 2,
    username: "李四",
    auth: [2, 3, 5, 6, 7, 8],
  },
  {
    id: 3,
    username: "王五",
    auth: [2, 3, 4, 5, 6, 7, 8],
  },
];

export { users, UserT };
