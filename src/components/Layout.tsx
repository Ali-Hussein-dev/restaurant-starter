import Head from "next/head";
import * as React from "react";
import { Navbar, Footer } from ".";
import { useRestCtx } from "../hooks";
import { themes } from "../utils/themes-list";

export type ThemeNameT = typeof themes[number];
//======================================
export const Layout = ({
  children,
  title = "Website Starter",
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  const { theme } = useRestCtx();
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
