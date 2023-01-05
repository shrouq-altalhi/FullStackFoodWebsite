import express from "express";
import validate from "../middleware/validate";
import {
  chefRegisterSchema,
  foodyRegisterSchema,
  loginSchema,
} from "../zod-schema/auth.schema";
import {
  chefLoginHandler,
  chefRegisterHandler,
  foodyLoginHandler,
  foodyRegisterHandler,
} from "../controller/auth.controller";

const router = express();

router.post("/cheflogin", validate(loginSchema), chefLoginHandler);
router.post("/foodylogin", validate(loginSchema), foodyLoginHandler);
router.post("/chefregister", validate(chefRegisterSchema), chefRegisterHandler);
router.post(
  "/foodyregister",
  validate(foodyRegisterSchema),
  foodyRegisterHandler
);

export default router;
