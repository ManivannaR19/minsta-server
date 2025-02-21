import UserModels from "../models/user-models";

const getAllUsers = async () => {
  try {
    const result = await UserModels.getAllUsers();
    return result;
  } catch (err) {
    const error = err as Error;
    console.log(`Error in getAllUsersService: ${error.message}`);
    throw new Error(error.message);
  }
};

export default { getAllUsers };
