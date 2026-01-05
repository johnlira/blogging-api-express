import { Router, Request, Response } from "express";
import { ForbiddenError } from "../errors/app-error";

const apiRouter = Router();

apiRouter.get("/", (req: Request, res: Response) => res.send("ok"));
apiRouter.get("/error", (req: Request, res: Response) => {
  throw new ForbiddenError();
});

export default apiRouter;
