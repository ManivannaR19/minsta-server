import { Request, Response } from "express";
import UserServices from "../services/user-services";
import { ERROR_MAP_GET_ALL_USERS } from "src/constants/user-constants";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsers();
    res.status(200).json({ message: result });
  } catch (err) {
    const error = err as Error;
    const status = ERROR_MAP_GET_ALL_USERS[error.message] || 500;
    console.log(`Error in registerController: ${error.message}`);

    res
      .status(status)
      .json({ message: error.message || "Internal server error" });
  }
};

export default { getAllUsers };
