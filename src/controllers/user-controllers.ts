import { Request, Response } from "express";
import UserServices from "../services/user-services";

const getAllUsers = async (req: Request, res: Response) => {
  const users = await UserServices.getAllUsers();
  res.send(users);
};

export default { getAllUsers };
