import { Response, Request } from "express";
import { createPost } from "./services/create-post";
import { InputPost } from "./posts.interfaces";
import { getAllPosts } from "./services/get-all-posts";

export const postsController = {
  create: async (req: Request, res: Response) => {
    const body = req.body as InputPost;
    const post = await createPost(body);
    res.status(200).send({
      message: "Post successfully created.",
      post,
    });
  },
  getAll: async (req: Request, res: Response) => {
    const posts = await getAllPosts();
    res.status(200).send({
      posts,
    });
  },
};
