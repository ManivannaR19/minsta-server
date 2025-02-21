import { Request, Response } from "express";
import AuthServices from "../services/auth-services";
import {
  ERROR_MAP_LOGIN,
  ERROR_MAP_REGISTER,
} from "src/constants/auth-constants";
import { LoginPayload, RegisterPayload } from "src/types/auth-types";
import { Config } from "@config";

const register = async (req: Request, res: Response) => {
  try {
    const { username, email_address, password } = req.body as RegisterPayload;
    const result = await AuthServices.register({
      username,
      email_address,
      password,
    });
    res.status(201).json({ message: result });
  } catch (err) {
    const error = err as Error;
    const status = ERROR_MAP_REGISTER[error.message] || 500;
    console.log(`Error in registerController: ${error.message}`);

    res
      .status(status)
      .json({ message: error.message || "Internal server error" });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email_address, password } = req.body as LoginPayload;
    const result = await AuthServices.login({ email_address, password });
    res
      .status(200)
      .cookie("token", result.token, {
        httpOnly: true,
        secure: Config.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 1000,
      })
      .json({ message: result.user });
  } catch (err) {
    const error = err as Error;
    const status = ERROR_MAP_LOGIN[error.message] || 500;
    console.log(`Error in loginController: ${error.message}`);

    res
      .status(status)
      .json({ message: error.message || "Internal server error" });
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .clearCookie("token", {
        httpOnly: true,
        secure: Config.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 0,
      })
      .json({ message: "User logged out successfully" });
  } catch (err) {
    const error = err as Error;
    console.log(`Error in logoutController: ${error.message}`);

    res.status(500).json("Internal server error");
  }
};

export default { register, login, logout };
