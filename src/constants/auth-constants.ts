export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

export const ERROR_MAP_REGISTER: Record<string, number> = {
  "All fields are required": 400,
  "Invalid email format": 400,
  "Invalid password format": 400,
  "User already exists": 409,
  "Failed to hash password": 500,
};

export const ERROR_MAP_LOGIN: Record<string, number> = {
  "All fields are required": 400,
  "Invalid email format": 400,
  "Invalid password format": 400,
  "Invalid email or password": 401,
};
