import { desc, eq, ilike, or } from "drizzle-orm";
import { db } from "./lib/db";
import { contacts } from "database/schema";

type ContactMutation = {
  id?: string;
  first?: string;
  last?: string;
  avatar?: string;
  twitter?: string;
  notes?: string;
  favorite?: boolean;
};

////////////////////////////////////////////////////////////////////////////////
// Handful of helper functions to be called from route loaders and actions
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

export async function createContact(newData: ContactMutation) {
  const { first, last, avatar, twitter, notes } = newData;
  const result = await db
    .insert(contacts)
    .values({ first, last, avatar, twitter, notes })
    .returning();
  return result;
}

export async function getContact(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const result = await db
    .select()
    .from(contacts)
    .where(eq(contacts.id, Number(id)));
  return result[0];
}

export async function updateContact(id: string, updates: ContactMutation) {
  const { first, last, avatar, twitter, notes } = updates;
  const result = await db
    .update(contacts)
    .set({
      first,
      last,
      avatar,
      twitter,
      notes,
    })
    .where(eq(contacts.id, Number(id)))
    .returning({ updatedId: contacts.id });

  return result;
}

export async function deleteContact(id: string) {
  await db.delete(contacts).where(eq(contacts.id, Number(id)));
}
