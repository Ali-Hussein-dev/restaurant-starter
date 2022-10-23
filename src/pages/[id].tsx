import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Gallery, Hero, Layout, Contact, Form, MenuTabs } from "../components";
import * as React from "react";
import { RestProv } from "../hooks";
import { InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";

//----------------------------------------------------------------------
const Theme: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <RestProv store={data}>
      <Layout title="Restaurant Starter">
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

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { id: "template" } }, { params: { id: "template-2" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as ParsedUrlQuery;
  const data = await import(`../../db/${id}.json`).then((d) => d.default);
  return {
    props: {
      data,
    },
  };
};
