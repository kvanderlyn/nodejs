import React, { useState } from 'react';
import TopNav from '~/components/navigation/topNav';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  useLoaderData,
} from '@remix-run/react';
import { getTheme } from '~/utils/session.server';
import { LoaderArgs } from '@remix-run/node';
import { colorConfig } from '~/utils/colorConfig';
import logo from '~/images/logos/inline_white.svg';
import { theme_colors } from '~/utils/enums';
import { navLink } from '~/components/navigation/navInterfaces';

export const loader = async ({ request }: LoaderArgs) => {
  const theme = await getTheme(request);
  return { theme: theme };
};

const navigation: navLink[] = [
  { name: 'Dashboard', link: '#', active: false },
  { name: 'Team', link: '#', active: false },
  { name: 'Projects', link: '#', active: true },
  { name: 'Calendar', link: '#', active: false },
];
const logoComponent = (
  <Link to={'/'}>
    <img
      style={{ height: '1.5rem' }}
      src={logo}
      alt="campaign companion logo"
    />
  </Link>
);
const colors = colorConfig;

export default function LoggedIn() {
  const data: any = useLoaderData<typeof loader>();
  const colorIndex: theme_colors = Object.values(theme_colors).includes(
    data.theme
  )
    ? data.theme
    : theme_colors.blue;

  const [color, setColor] = useState<any>(colors[colorIndex]);
  return (
    <React.Fragment>
      <TopNav
        navigation={navigation}
        colorPalette={color}
        logo={logoComponent}
      />
      <Outlet />
    </React.Fragment>
  );
}
