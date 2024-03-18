import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import normalizeCss from "normalize.css?url";
import "./styles/main.scss";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export const links: LinksFunction = () => [
  { rel: "preload", href: "https://fonts.googleapis.com" },
  { rel: "preload", href: "https://fonts.gstatic.com", crossOrigin: undefined },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Patrick+Hand&display=swap",
    crossOrigin: undefined,
  },
  { rel: "stylesheet", href: normalizeCss },
];

export function HydrateFallback() {
  return <p>Loading...</p>;
}
