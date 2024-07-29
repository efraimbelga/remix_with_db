"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var node_postgres_1 = require("drizzle-orm/node-postgres");
var pg_1 = require("pg");
var connection = new pg_1.Client({
    connectionString: process.env.DB_CONNECTIONSTRING,
});
await connection.connect();
var db = (0, node_postgres_1.drizzle)(connection);
// await migrate(db, {
//   migrationsFolder: "./database/migrations",
// });
await connection.end();
console.log("Database migration done");
