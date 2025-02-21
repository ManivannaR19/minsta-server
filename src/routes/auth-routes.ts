import { Router } from "express";
import AuthControllers from "../controllers/auth-controllers";

const router = Router();

router.post("/register", AuthControllers.register);

router.post("/login", AuthControllers.login);

router.post("/logout", AuthControllers.logout);

export default router;
