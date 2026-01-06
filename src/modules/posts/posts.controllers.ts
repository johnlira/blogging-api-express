import { Response, Request } from "express";
import { createPost } from "./services/create-post";
import { InputPost } from "./posts.interfaces";

export const postsController = {
  create: async (req: Request, res: Response) => {
    const body = req.body as InputPost;
    const post = await createPost(body);
    res.status(200).send({
      message: "Post successfully created.",
      post,
    });
  },
};
