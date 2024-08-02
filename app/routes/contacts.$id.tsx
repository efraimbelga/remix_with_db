import type { FunctionComponent } from "react";
import { json } from "@remix-run/node";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";

import { getContact } from "../data";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import isImage from "is-image";
import { db } from "~/lib/db";
import { contacts } from "database/schema";
import { eq } from "drizzle-orm";
import { sqids } from "~/lib/sqids";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.id, "Missing id param");
  const contact = await getContact(params.id);

  if (!contact) {
    throw new Response("Not Found", { status: 404 });
  }

  const avatar = isImage(contact.avatar)
    ? contact.avatar
    : "/User_icon_2.svg.png";

  return json({ contact, avatar });
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  invariant(params.id, "Missing id param");
  const formData = await request.formData();

  const id = sqids.decode(params.id)[0];
  await db
    .update(contacts)
    .set({ favorite: formData.get("favorite") === "true" })
    .where(eq(contacts.id, Number(id)));

  return false;
};

export default function Contact() {
  const { contact, avatar } = useLoaderData<typeof loader>();

  return (
    <div id="contact">
      <div>
        <img
          alt={`${contact.first} ${contact.last} avatar`}
          key={contact.avatar}
          src={avatar}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite favorite={contact.favorite ? contact.favorite : false} />
        </h1>

        {contact.twitter ? (
          <p>
            <a href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        ) : null}

        {contact.notes ? <p>{contact.notes}</p> : null}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>

          <Form
            action="destroy"
            method="post"
            onSubmit={(event) => {
              const response = confirm(
                "Please confirm you want to delete this record."
              );
              if (!response) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

const Favorite: FunctionComponent<{
  favorite: boolean;
}> = ({ favorite }) => {
  const fetcher = useFetcher();
  const favoriteValue = fetcher.formData
    ? fetcher.formData.get("favorite") === "true"
    : favorite;

  return (
    <fetcher.Form method="post">
      <button
        aria-label={
          favoriteValue ? "Remove from favorites" : "Add to favorites"
        }
        name="favorite"
        value={favoriteValue ? "false" : "true"}
      >
        {favoriteValue ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
};
