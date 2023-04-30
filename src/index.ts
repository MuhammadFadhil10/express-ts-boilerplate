import type { Request, Response } from "express";

import express from "express";
import { config } from "dotenv";

// config
config();

// utils
const PORT = process.env.PORT;

// server
const app = express();

app.listen(PORT, () => {
  console.log("app listening on port: ", PORT, " 🚀🚀🚀");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from server");
});
