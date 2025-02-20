import db from "@db";
import { User } from "@types";
import { DatabaseError } from "pg";
import { RegisterPayload } from "src/types/auth-types";

const getAllUsers = async () => {
  try {
    const result = await db.query("SELECT * FROM users");
    return result.rows as User[];
  } catch (err) {
    const error = err as DatabaseError;
    console.log(`Error in getAllUsersModel: ${error.message}`);
  }
};

const createUser = async (payload: RegisterPayload) => {
  try {
    const { username, email_address, password } = payload;

    await db.query(
      "INSERT INTO users (username, email_address, password) VALUES ($1, $2, $3)",
      [username, email_address, password]
    );

    return "User created successfully";
  } catch (err) {
    const error = err as DatabaseError;
    console.log(`Error in createUserModel: ${error.message}`);
    throw new Error(error.message);
  }
};

export default { getAllUsers, createUser };
