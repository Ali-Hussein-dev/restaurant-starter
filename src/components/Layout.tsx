import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import { Navbar, Footer } from ".";
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
  const router = useRouter();
  const url = new URL("https://placeholder.com/" + router.asPath);
  const theme = url.searchParams.get("theme") || "black";
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
