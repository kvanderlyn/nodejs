import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useState } from "react";
import { navLink } from "./components/navigation/navInterfaces";
import TopNav from "./components/navigation/topNav";
import styles from "./styles/app.css"
import { colorConfig } from "./utils/colorConfig";

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});
const navigation:navLink[] = [
  { name: 'Dashboard', link: '#', active: false },
  { name: 'Team', link: '#', active: false },
  { name: 'Projects', link: '#', active: true },
  { name: 'Calendar', link: '#', active: false },
];
const colors = colorConfig

export default function App() {
  const [color, setColor] = useState(colors.sky)
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <TopNav navigation={navigation} colorPalette={color} />
        <button className="border-2 text-xs px-3 py-1 border-red-500 hover:bg-red-500 hover:text-white rounded-full text-red-500 m-1" onClick={()=> {setColor(colors.red)}}>Red</button>
        <button className="border-2 text-xs px-3 py-1 border-lime-500  hover:bg-lime-500 hover:text-white rounded-full text-lime-500 m-1" onClick={()=> {setColor(colors.lime)}}>Green</button>
        <button className="border-2 text-xs px-3 py-1 border-sky-500  hover:bg-sky-500 hover:text-white rounded-full text-sky-500 mx-1" onClick={()=> {setColor(colors.sky)}}>Blue</button>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
