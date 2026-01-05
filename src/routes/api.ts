import { Router, Request, Response } from "express";
import { ValidationError } from "../errors/app-error";

const apiRouter = Router();

apiRouter.get("/", (req: Request, res: Response) => res.send("in development"));
apiRouter.get("/health", (req: Request, res: Response) => res.send({ status: "ok" }));
apiRouter.get("/error-check", (req: Request, res: Response) => {
  throw new ValidationError("Error handler is worth");
});

export default apiRouter;
