import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Gallery, Hero, Layout, Contact, Form, MenuTabs } from "../components";
import * as React from "react";
import Image from "next/image";
import { themes } from "../utils/themes-list";
import { InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";

//----------------------------------------------------------------------
const Theme: NextPage = ({
  theme,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Restaurant Starter" theme={theme}>
      <Hero />
      <Gallery />
      <Form />
      <MenuTabs />
      <Contact />
    </Layout>
  );
};

export default Theme;

interface ParamsT extends ParsedUrlQuery {
  theme: typeof themes[number];
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = themes.map((theme) => ({ params: { theme } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const { theme } = ctx.params as ParamsT;
  return { props: { theme } };
};
