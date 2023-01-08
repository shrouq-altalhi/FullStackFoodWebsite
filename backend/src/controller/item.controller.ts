import { Request, Response } from "express";
import { prisma } from "../config/db";
import { IUser } from "../middleware/protect";
import { Item, Type } from "@prisma/client";
import { DeleteItemType, UpdatePostItemType } from "../zod-schema/Item.schema";

export const getAllItemHandler = async (req: Request, res: Response) => {
  const chefid = res.locals.user as IUser;
  const item = await prisma.item.findMany({
    where: {
      chef_id: chefid.id,
    },
  });
  return res.status(200).json(item);
};

export const getAllItemByNameHandler = async (req: Request, res: Response) => {
  const user = res.locals.user as IUser;

  const { name } = req.params;

  const type = name as Type;

  const itemList = await prisma.item.findMany({
    where: { productType: type },
  });
  return res.status(200).json(itemList);
};

export const addItemHandler = async (req: Request, res: Response) => {
  try {
    const { title, description, price, city, productType, image } =
      req.body as Item;
    const chef = res.locals.user as IUser;
    await prisma.item.create({
      data: {
        title,
        description,
        price,
        city,
        productType,
        image,
        chef_id: chef.id,
      },
    });
    return res.status(201).json({
      message: "New Item Created for chef :" + chef.id,
    });
  } catch (error) {
    return res.status(400).json({ message: "Issue with your input!" });
  }
};

export const updateItemHandler = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user as IUser;
    const updateditem = req.body as Item;
    const { itemid } = req.params as UpdatePostItemType;

    const isUpdated = await prisma.item.updateMany({
      where: {
        id: itemid,
        chef_id: user.id,
      },
      data: updateditem,
    });

    if (isUpdated.count == 0) {
      return res.status(400).json({
        message: "Invalid item id",
      });
    }

    return res.status(200).json({
      message: "Item is updated !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error !",
    });
  }
};

export const deleteItemHandler = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user as IUser;
    const { itemid } = req.params as DeleteItemType;

    const deleteCount = await prisma.item.deleteMany({
      where: {
        id: itemid,
        chef_id: user.id,
      },
    });

    if (deleteCount.count == 0) {
      return res.status(400).json({
        message: "Invalid item id",
      });
    }

    return res.status(200).json({
      message: "item deleted !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error !",
    });
  }
};
