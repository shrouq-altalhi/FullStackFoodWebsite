import { Chef } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export interface IUser {
  id: string;
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "You're not allowed to access to this route! ",
      });
    }
    token = token.split(" ")[1];
    const user = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as IUser ;

    res.locals.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "You're not allowed to access to this route! ",
    });
  }
};
