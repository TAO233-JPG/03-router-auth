import express from "express";
import bodyParser from "body-parser";

import { users, UserT } from "./data/users";
import { routes, RouteT } from "./data/routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

type LoginT = {
  username: string;
};
app.post("/login", (request, response) => {
  const { username }: LoginT = request.body;
  const user: UserT | undefined = users.find(
    (user) => user.username === username
  );

  if (user) {
    const authRouteList: RouteT[] = [];
    user.auth.forEach((v) => {
      const route = routes.find((route) => route.id === v);
      if (route) {
        authRouteList.push(route);
      }
    });
    response.status(200).send({
      data: authRouteList,
    });
  } else {
    response.status(200).send({
      data: "no user exist",
    });
  }
});
app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});
