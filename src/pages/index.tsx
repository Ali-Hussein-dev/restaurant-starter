import type { NextPage } from "next";
import { Section, Hero, Layout } from "../components";
import * as React from "react";

//----------------------------------------------------------------------
const Home: NextPage = () => {
  return (
    <Layout title="Website Starter">
      <Hero />
      <Section id="#section2">
        <div className="px-2"></div>
      </Section>
      <Section id="#section3">
        <h2 className="text-2xl">SECTION 3</h2>
      </Section>
      <Section id="#section4">
        <h2 className="text-2xl">SECTION 4</h2>
      </Section>
    </Layout>
  );
};

export default Home;
