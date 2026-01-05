import { Request, Response, NextFunction } from "express";
import AppError from "./app-error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).send({
      code: err.code,
      message: err.message,
    });
  }
  res.status(500).send({
    code: "INTERNAL_SERVER_ERROR",
    message: "An internal server error occurred",
  });
};
