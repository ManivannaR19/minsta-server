import { Router } from "express";
import UserControllers from "../controllers/user-controllers";

const router = Router();

router.get("/", UserControllers.getAllUsers);

export default router;
