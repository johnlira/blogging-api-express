import { Router, Request, Response } from "express";
import { postsController } from "./posts.controllers";
import { validateBody } from "../../middlewares/validate-body";
import { inputPostSchema } from "./posts.interfaces";

export const postsRoutes = (router: Router) => {
  router.post("/posts", validateBody(inputPostSchema), postsController.create);
};
