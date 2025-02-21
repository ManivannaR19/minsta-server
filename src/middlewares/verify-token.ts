import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { Config } from "@config";
import { JWTPayload } from "src/types/auth-types";

interface AuthenticatedRequest extends Request {
  user?: {
    user_id: number;
    email_address: string;
  };
}

const verifyToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.cookie?.split("=")[1];

  if (!token) {
    res.status(401).json({ message: "No token provided" });
    return;
  }

  try {
    const decoded = jwt.verify(token, Config.JWT_SECRET!) as JWTPayload;
    req.user = decoded;

    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
    return;
  }
};

export default verifyToken;
