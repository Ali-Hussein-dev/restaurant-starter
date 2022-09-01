import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  Gallery,
  Hero,
  Layout,
  Contact,
  GridLayout,
  Section,
  Form,
} from "../components";
import * as React from "react";
import Image from "next/image";
import { themes } from "../utils/themes-list";
import { InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
const gridItems = [
  "/menu/1.jpg",
  "/menu/2.jpg",
  "/menu/3.jpg",
  "/menu/4.jpg",
  "/menu/5.jpg",
  "/menu/6.jpg",
];
//----------------------------------------------------------------------
const Theme: NextPage = ({
  theme,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Restaurant Starter" theme={theme}>
      <Hero />
      <Gallery />
      <Form />
      <Section id="#menu">
        <div className="w-full mx-auto lg:w-4/6">
          <h2 className="h2">Our Top Dishes</h2>
          <GridLayout
            items={gridItems.map((src, i) => (
              <Image
                key={i}
                layout="fill"
                src={src}
                alt="image"
                className="object-cover transition-transform duration-500 ease-in hover:scale-125"
              />
            ))}
          />
        </div>
      </Section>
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
