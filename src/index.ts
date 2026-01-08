import express from "express";
import cors from "cors";
import apiRouter from "./routes/api";
import { errorHandler } from "./errors/error-handler";
import logger from "./config/logger";
import { env } from "./config/env";

const app = express();
const port = 3000;

app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.info(`Server is running on port ${env.PORT}`);
});
