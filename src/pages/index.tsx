import type { NextPage } from "next";
import { Gallery, Hero, Layout, Contact } from "../components";
import * as React from "react";

//----------------------------------------------------------------------
const Home: NextPage = () => {
  return (
    <Layout title="Restaurant Starter">
      <Hero />
      {/* <Section id="#section3">
        <h2 className="text-2xl">Menu</h2>
      </Section> */}
      <Gallery />
      <Contact />
    </Layout>
  );
};

export default Home;
