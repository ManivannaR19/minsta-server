import db from "@db";
import { User } from "@types";

const getAllUsers = async (): Promise<User[]> => {
  const result = await db.query("SELECT * FROM users");
  return result.rows as User[];
};

export default { getAllUsers };
