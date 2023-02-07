import { ActionArgs, json, LoaderArgs, redirect } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { badRequest } from '~/utils/request.server';
import { createUserSession, getUserId } from '~/utils/session.server';

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUserId(request);
  console.log(user);
  return { user: user };
};

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const name = form.get('name');

  if (!form || !name || typeof name !== 'string') {
    return badRequest({
      fieldErrors: 'null',
      formError: 'Not implemented',
    });
  } else {
    return createUserSession(name, '/');
  }
}

export default function UserHome() {
  const data = useLoaderData<typeof loader>();
  return (
    <main>
      <h1> Welcome {data.user !== 'null' ? data.user : ''} </h1>
      <Form method="post">
        <input
          type="text"
          name="name"
          id="name-input"
          className="border mx-2 border-purple-500 rounded-sm"
        />
        <button type="submit">Create</button>
      </Form>
    </main>
  );
}
