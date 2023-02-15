import { ActionArgs, LoaderArgs } from '@remix-run/node';
import { Form, Link } from '@remix-run/react';
import Button from '~/components/buttons/button';
import { badRequest } from '~/utils/request.server';
import { getTheme, setThemePreference } from '~/utils/session.server';

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const theme = form.get('theme');

  if (!form || !theme || typeof theme !== 'string') {
    return badRequest({
      fieldErrors: 'null',
      formError: 'Not implemented',
    });
  } else {
    return setThemePreference(theme, '/settings');
  }
}

export default function Settings() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="border px-2 py-1 my-1">
        <h2 className="font-bold text-xl">Theme Color</h2>
        <Form method="post">
          <label htmlFor="theme">Set Theme Color: </label>
          <select name="theme">
          <option value="yellow">Select Option</option>
            <option value="red">Red</option>
            <option value="sky">Blue</option>
            <option value="lime">Green</option>
          </select>
          <Button type='submit'>Save</Button>
          {/* <button type="submit">Save</button> */}
        </Form>
      </div>
    </div>
  );
}
