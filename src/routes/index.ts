import express from "express";
import UserRouter from "./user-routes";
import AuthRouter from "./auth-routes";
import PostRouter from "./post-routes";

const router = express.Router();

const allRoutes = [
  {
    path: "/users",
    router: UserRouter,
  },
  {
    path: "/auth",
    router: AuthRouter,
  },
  {
    path: "/posts",
    router: PostRouter,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.router);
});

export default router;
