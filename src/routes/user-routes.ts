import { Router } from "express";
import UserControllers from "../controllers/user-controllers";
import verifyToken from "src/middlewares/verify-token";

const router = Router();

router.get("/", verifyToken, UserControllers.getAllUsers);

export default router;
