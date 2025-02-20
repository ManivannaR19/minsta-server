import express, { Express, Request, Response } from "express";
import { Config } from "./src/config";
import db from "@db";

const app: Express = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE id = 2");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(Config.PORT, () => {
  console.log(`Server running on port ${Config.PORT}`);
});
