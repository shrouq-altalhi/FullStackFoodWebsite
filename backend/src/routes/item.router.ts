import express from "express";
import {
  addItemHandler,
  deleteItemHandler,
  getAllItemHandler,
  updateItemHandler,
} from "../controller/item.controller";
import { protect } from "../middleware/protect";
import {
  UpdatePostItem,
  addNewItem,
  DeleteItem,
} from "../zod-schema/Item.schema";
import validate from "../middleware/validate";

const router = express.Router();

router.get("/", protect, getAllItemHandler);
router.post("/", protect, validate(addNewItem), addItemHandler);
router.put("/:itemid", protect, validate(UpdatePostItem), updateItemHandler);
router.delete("/:itemid", protect, validate(DeleteItem), deleteItemHandler);

export default router;
