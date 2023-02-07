import { Link } from '@remix-run/react';

export default function Index() {
  // console.log(process.env.SOME_SECRET)
  return (
    <div className="mx-auto mt-16 max-w-7xl text-center">
      <Link to="/user" className="text-xl text-blue-600 underline">
        User Section
      </Link>
    </div>
  );
}
