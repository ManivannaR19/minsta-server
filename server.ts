import cors from "cors";
import express, { Express } from "express";

import { Config } from "./src/config";
import allRoutes from "./src/routes";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/api", allRoutes);

app.listen(Config.PORT, () => {
  console.log(`Server running on port ${Config.PORT}`);
});
