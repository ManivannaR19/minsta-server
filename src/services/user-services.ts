import UserModels from "../models/user-models";
import { User } from "@types";

const getAllUsers = async (): Promise<User[]> => {
  const users: User[] = await UserModels.getAllUsers();
  return users;
};

export default { getAllUsers };
