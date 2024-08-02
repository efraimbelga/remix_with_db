import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  first: varchar("first", { length: 25 }).notNull(),
  last: varchar("last", { length: 25 }).notNull(),
  avatar: varchar("avatar", { length: 256 }).notNull(),
  twitter: varchar("twitter", { length: 45 }),
  notes: varchar("notes", { length: 246 }),
  favorite: boolean("favorite"),
});
