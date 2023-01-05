import { Request, Response } from "express";
import { prisma } from "../config/db";
import { IUser } from "../middleware/protect";
import { Item } from "@prisma/client";

export const getAllItemHandler = async (req: Request, res: Response) => {
  const chefid = res.locals.user as IUser;
  const item = await prisma.item.findMany({
    where: {
      chef_id: chefid.id,
    },
  });
  return res.status(200).json(item);
};

export const addItemHandler = async (req: Request, res: Response) => {
  const { title, description, price, city, productType } = req.body as Item;
  const chef = res.locals.user as IUser;
  await prisma.item.create({
    data: {
      title,
      description,
      price,
      city,
      productType,
      chef_id: chef.id,
    },
  });
  return res.status(201).json({
    message: "New Item Created for chef :" + chef.id,
  });
};

export const updateItemHandler = async (req: Request, res: Response) => {};

export const deleteItemHandler = async (req: Request, res: Response) => {};
