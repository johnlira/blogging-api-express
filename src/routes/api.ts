import { Router, Request, Response } from "express";
import { ValidationError } from "../errors/app-error";
import { postsRoutes } from "../modules/posts/posts.routes";

const apiRouter = Router();

postsRoutes(apiRouter);

apiRouter.get("/", (req: Request, res: Response) => res.send("in development"));
apiRouter.get("/health", (req: Request, res: Response) => res.send({ status: "ok" }));

export default apiRouter;
