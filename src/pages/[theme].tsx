import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Gallery, Hero, Layout, Contact, Form, MenuTabs } from "../components";
import * as React from "react";
import { themes } from "../utils/themes-list";
import { RestProv } from "../hooks";
import { InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import data from "../../db/template.json";

//----------------------------------------------------------------------
const Theme: NextPage = ({
  theme,
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <RestProv store={data}>
      <Layout title="Restaurant Starter" theme={theme}>
        <Hero />
        <Gallery />
        <Form />
        <MenuTabs />
        <Contact />
      </Layout>
    </RestProv>
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
  return { props: { theme, data } };
};
