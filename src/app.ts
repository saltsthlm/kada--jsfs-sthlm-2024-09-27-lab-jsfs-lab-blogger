import express from "express";
import { Request, Response } from "express";

const app = express();

app.use(express.static("public"));
app.get("/", (req: Request, res: Response) => {
  res.send("hej hej");
});

// MORE ROUTES HERE

export default app;
