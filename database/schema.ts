import {
  integer,
  pgEnum,
  pgTable,
  serial,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

// declaring enum in database
export const popularityEnum = pgEnum("popularity", [
  "unknown",
  "known",
  "popular",
]);

export const countries = pgTable(
  "countries",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
  },
  (countries) => {
    return {
      nameIndex: uniqueIndex("name_idx").on(countries.name),
    };
  }
);

export const cities = pgTable("cities", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  countryId: integer("country_id").references(() => countries.id),
  popularity: popularityEnum("popularity"),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  first: varchar("first", { length: 25 }),
  last: varchar("last", { length: 25 }),
  avatar: varchar("avatar", { length: 25 }),
  twitter: varchar("twitter", { length: 45 }),
  notes: varchar("twitter", { length: 246 }),
  favorite: integer("favorite", { mode: "boolean" }),
});
