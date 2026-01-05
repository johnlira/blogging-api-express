import express from "express";
import apiRouter from "./routes/api";
import { errorHandler } from "./errors/error-handler";

const app = express();
const port = 3000;

app.use("/api", apiRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
