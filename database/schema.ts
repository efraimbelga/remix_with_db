import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

// // declaring enum in database
// export const popularityEnum = pgEnum("popularity", [
//   "unknown",
//   "known",
//   "popular",
// ]);

// export const countries = pgTable(
//   "countries",
//   {
//     id: serial("id").primaryKey(),
//     name: varchar("name", { length: 256 }),
//   },
//   (countries) => {
//     return {
//       nameIndex: uniqueIndex("name_idx").on(countries.name),
//     };
//   }
// );

// export const cities = pgTable("cities", {
//   id: serial("id").primaryKey(),
//   name: varchar("name", { length: 256 }),
//   countryId: integer("country_id").references(() => countries.id),
//   popularity: popularityEnum("popularity"),
// });

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  first: varchar("first", { length: 25 }).notNull(),
  last: varchar("last", { length: 25 }).notNull(),
  avatar: varchar("avatar", { length: 256 }).notNull(),
  twitter: varchar("twitter", { length: 45 }),
  notes: varchar("notes", { length: 246 }),
  favorite: boolean("favorite"),
});
