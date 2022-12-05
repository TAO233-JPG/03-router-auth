type RouteT = {
  id: number;
  pid: number;
  path: string;
  name: string;
  title: string;
  link?: string;
};

const routes: RouteT[] = [
  { id: 2, pid: 0, path: "/course", name: "Course", title: "课程管理" },
  {
    id: 3,
    pid: 2,
    path: "operate",
    name: "CourseOperate",
    title: "课程操作",
    link: "/course/operate",
  },
  {
    id: 4,
    pid: 3,
    path: "info_data",
    name: "CourseInfoData",
    title: "课程数据",
    link: "/course/operate/info_data",
  },
  {
    id: 5,
    pid: 2,
    path: "add",
    name: "CourseAdd",
    title: "添加课程",
    link: "/course/add",
  },
  {
    id: 6,
    pid: 0,
    path: "/student",
    name: "Student",
    title: "学生管理",
  },
  {
    id: 7,
    pid: 6,
    path: "operate",
    name: "StudentOperate",
    title: "学生操作",
    link: "/student/operate",
  },
  {
    id: 8,
    pid: 6,
    path: "add",
    name: "StudentAdd",
    title: "添加学生",
    link: "/student/add",
  },
];

export { RouteT, routes };
