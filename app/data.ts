import { desc, eq, ilike, or } from "drizzle-orm";
import { db } from "./lib/db";
import { contacts } from "database/schema";
import { sqids } from "./lib/sqids";
import { z } from "zod";

export const Contact = z.object({
  first: z.string(),
  last: z.string(),
  avatar: z.string(),
  twitter: z.string(),
  notes: z.string(),
});

export async function getContacts(query?: string | null) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const result = await db
    .select()
    .from(contacts)
    .where(
      query
        ? or(
            ilike(contacts.first, `%${query}%`),
            ilike(contacts.last, `%${query}%`)
          )
        : undefined
    )
    .orderBy(desc(contacts.id));
  return result;
}

export async function getContact(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const q = sqids.decode(id)[0];

  const result = await db
    .select()
    .from(contacts)
    .where(eq(contacts.id, Number(q)));
  return result[0];
}

export async function deleteContact(id: string) {
  const q = sqids.decode(id)[0];
  await db.delete(contacts).where(eq(contacts.id, Number(q)));
}
