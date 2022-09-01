import Head from "next/head";
import * as React from "react";
import { Navbar, Footer } from ".";
import { themes } from "../utils/themes-list";
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
