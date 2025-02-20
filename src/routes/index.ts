import express from "express";
import UserRouter from "./user-routes";
import AuthRouter from "./auth-routes";

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
];

allRoutes.forEach((route) => {
  router.use(route.path, route.router);
});

export default router;
