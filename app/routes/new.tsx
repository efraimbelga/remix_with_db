import { ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { createContact } from "~/data";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const newData = Object.fromEntries(formData);
  const contact = await createContact(newData);

  return false;
}

const NewContact = () => {
  return (
    <Form id="contact-form" method="post">
      <p>
        <span>Name</span>
        <input
          aria-label="First name"
          name="first"
          type="text"
          placeholder="First"
        />
        <input
          aria-label="Last name"
          name="last"
          placeholder="Last"
          type="text"
        />
      </p>
      <label>
        <span>Twitter</span>
        <input name="twitter" placeholder="@jack" type="text" />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          aria-label="Avatar URL"
          name="avatar"
          placeholder="https://example.com/avatar.jpg"
          type="text"
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" rows={6} />
      </label>
      <p>
        <button type="submit">Save</button>
      </p>
    </Form>
  );
};

export default NewContact;
