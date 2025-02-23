import db from "@db";
import { CreateUserPayload, User } from "@types";
import { DatabaseError } from "pg";

const getAllUsers = async () => {
  try {
    const result = await db.query("SELECT * FROM users");
    return result.rows as User[];
  } catch (err) {
    const error = err as DatabaseError;
    console.log(`Error in getAllUsersModel: ${error.message}`);
    throw new Error(error.message);
  }
};

const createUser = async (payload: CreateUserPayload) => {
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
