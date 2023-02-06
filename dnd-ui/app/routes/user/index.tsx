import { ActionArgs, json, redirect } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { badRequest } from '~/utils/request.server';

export const loader = async () => {
  return json({
    posts: [
      {
        slug: 'my-first-post',
        title: 'My First Post',
      },
      {
        slug: '90s-mixtape',
        title: 'A Mixtape I Made Just For You',
      },
    ],
  });
};

export async function action({request}: ActionArgs){
    // const form = await request.formData();

    
   return badRequest({
        fieldErrors: null,
        formError: "Not implemented",
      });
}

export default function UserHome() {
  const { posts } = useLoaderData<typeof loader>();
  const items = posts?.map((post, i)=>{
    return <li key={i}>{post.title}</li>
  })

  return (
    <main>
      <h1> Welcome </h1>
      <ul>
        {items}
      </ul>
      <Form method="post">
        <input type="text" name="title" />
        <button type="submit">Create</button>
      </Form>
    </main>
  );
}
