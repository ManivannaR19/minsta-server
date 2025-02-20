import { Pool } from "pg";
import { Config } from "src/config";

const pool = new Pool({
  user: Config.POSTGRES_USER,
  host: Config.POSTGRES_HOST,
  database: Config.POSTGRES_DATABASE,
  password: Config.POSTGRES_PASSWORD,
  port: Number(Config.PORT),
});

export default pool;
