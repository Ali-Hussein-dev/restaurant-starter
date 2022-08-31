import Head from "next/head";
import * as React from "react";
import { Navbar, Footer } from ".";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
] as const;
//======================================
export const Layout = ({
  children,
  title = "Website Starter",
  theme = "black",
}: {
  children: React.ReactNode;
  title?: string;
  theme?: typeof themes[number];
}) => {
  //======================================return
  return (
    <div data-theme={theme}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
