import express from "express";
import apiRouter from "./routes/api";
import { errorHandler } from "./errors/error-handler";
import logger from "./config/logger";

const app = express();
const port = 3000;

app.use(logger);
app.use("/api", apiRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});
