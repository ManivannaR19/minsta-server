import { Request, Response } from "express";
import AuthServices from "../services/auth-services";
import { ERROR_MAP } from "src/constants/auth-constants";

const register = async (req: Request, res: Response) => {
  try {
    const { username, email_address, password } = req.body;
    const result = await AuthServices.register({
      username,
      email_address,
      password,
    });

    res.status(200).json({ message: result });
  } catch (err) {
    const error = err as Error;
    const status = ERROR_MAP[error.message] || 500;

    res
      .status(status)
      .json({ message: error.message || "Internal server error" });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email_address, password } = req.body;
    const user = await AuthServices.login(email_address, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export default { register, login };
