import express from "express";
import UserRouter from "./user-routes";

const router = express.Router();

const allRoutes = [
  {
    path: "/users",
    router: UserRouter,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.router);
});

export default router;
