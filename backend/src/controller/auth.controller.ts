import { Chef, Foody } from "@prisma/client";
import { Request, Response } from "express";
import * as argon2 from "argon2";
import * as jwt from "jsonwebtoken";
import { prisma } from "../config/db";

export const chefLoginHandler = async (req: Request, res: Response) => {
  const { username, password } = req.body as Chef;

  const user = await prisma.chef.findUnique({
    where: {
      username,
    },
  });
  if (!user) {
    return res.status(400).json({
      message: "Wrong username and password",
    });
  }
  const isMatched = await argon2.verify(user.password, password);
  if (!isMatched) {
    return res.status(400).json({
      message: "Wrong username and password",
    });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
    expiresIn: "1 day",
  });

  return res.status(200).json({
    message: "Welcom back!" + username,
    token,
  });
};

export const foodyLoginHandler = async (req: Request, res: Response) => {
  const { username, password } = req.body as Foody;

  const user = await prisma.foody.findUnique({
    where: {
      username,
    },
  });
  if (!user) {
    return res.status(400).json({
      message: "Wrong username and password",
    });
  }
  const isMatched = await argon2.verify(user.password, password);
  if (!isMatched) {
    return res.status(400).json({
      message: "Wrong username and password",
    });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
    expiresIn: "1 day",
  });
  return res.status(200).json({
    message: "Welcom back! " + username,
    token,
  });
};

export const chefRegisterHandler = async (req: Request, res: Response) => {
  try {
    const { username, email, projectName, city, password } = req.body as Chef;
    const hashedPassword = await argon2.hash(password);

    await prisma.chef.create({
      data: {
        username,
        password: hashedPassword,
        email,
        projectName,
        city,
      },
    });

    return res.status(201).json({
      message: "Welcom Chef " + username,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Issue with your input",
    });
  }
};

export const foodyRegisterHandler = async (req: Request, res: Response) => {
  try {
    const { username, email, password, city } = req.body as Foody;
    const hashedPassword = await argon2.hash(password);

    await prisma.foody.create({
      data: {
        username,
        password: hashedPassword,
        email,
        city,
      },
    });

    return res.status(201).json({
      message: "Welcom " + username,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Issue with your input",
    });
  }
};
