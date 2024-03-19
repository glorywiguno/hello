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
  { rel: "preload", href: "https://fonts.googleapis.com", as: "style"},
  { rel: "preload", href: "https://fonts.gstatic.com", crossOrigin: undefined, as: "style" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400..600;1,400..600&family=Fredoka:wght@400..700&display=swap",
    crossOrigin: undefined,
  },
  { rel: "stylesheet", href: normalizeCss },
];

export function HydrateFallback() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >Loading...</div>
  );
}
