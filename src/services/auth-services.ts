import bcrypt from "bcryptjs";
import { EMAIL_REGEX, PASSWORD_REGEX } from "src/constants/auth-constants";
import UserModels from "../models/user-models";
import { RegisterPayload } from "src/types/auth-types";
import { Config } from "@config";

const register = async (payload: RegisterPayload) => {
  try {
    const { username, email_address, password } = payload;

    if (!username || !email_address || !password) {
      throw new Error("All fields are required");
    }

    if (!EMAIL_REGEX.test(email_address)) {
      throw new Error("Invalid email format");
    }

    if (!PASSWORD_REGEX.test(password)) {
      throw new Error("Invalid password format");
    }

    const allUsers = await UserModels.getAllUsers();
    const userExists = allUsers?.some(
      (user) =>
        user.email_address === email_address || user.username === username
    );

    if (userExists) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(
      password,
      Number(Config.SALT_ROUNDS)!
    );

    if (!hashedPassword) {
      throw new Error("Failed to hash password");
    }

    const result = await UserModels.createUser({
      username,
      email_address,
      password: hashedPassword,
    });

    return result;
  } catch (err) {
    const error = err as Error;
    console.log(`Error in registerService: ${error.message}`);
    throw new Error(error.message);
  }
};

const login = async (email: string, password: string) => {
  try {
  } catch (error) {}
};

export default { register, login };
