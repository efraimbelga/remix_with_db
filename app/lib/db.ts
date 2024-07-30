import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "database/schema";
import pg from "pg";

export const db = drizzle(
  new pg.Pool({
    connectionString: process.env.DB_CONNECTIONSTRING,
  }),
  { schema }
);
