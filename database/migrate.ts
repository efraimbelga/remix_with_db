import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import pg from "pg";

const connection = new pg.Client({
  connectionString: process.env.DB_CONNECTIONSTRING,
});

await connection.connect();
const db = drizzle(connection);

await migrate(db, {
  migrationsFolder: "./database/migrations",
});

await connection.end();

console.log("Database migration done");
