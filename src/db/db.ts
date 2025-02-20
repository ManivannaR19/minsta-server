import { Pool } from "pg";
import { Config } from "@config";

const pool = new Pool({
  user: Config.POSTGRES_USER,
  host: Config.POSTGRES_HOST,
  database: Config.POSTGRES_DATABASE,
  password: Config.POSTGRES_PASSWORD,
  port: Number(Config.POSTGRES_PORT),
});

export default pool;
