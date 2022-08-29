import type { NextPage } from "next";
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
const gridItems = [
  "/menu/1.jpg",
  "/menu/2.jpg",
  "/menu/3.jpg",
  "/menu/2.jpg",
  "/menu/1.jpg",
  "/menu/3.jpg",
];
//----------------------------------------------------------------------
const Home: NextPage = () => {
  return (
    <Layout title="Restaurant Starter">
      <Hero />
      <Gallery />
      <Form />
      <Section id="#menu">
        <div className="w-full p-4 mx-auto lg:w-4/6">
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

export default Home;
