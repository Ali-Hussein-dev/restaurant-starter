import { GridLayout, Tabs } from ".";
import * as React from "react";
import Image from "next/image";
// import { CgChevronRightO } from "react-icons/cg";

const panel1Items = [
  "/menu/coffee.jpg",
  "/menu/tea.jpg",
  "/menu/lemonade.jpg",
  "/menu/ayran.jpg",
];
const panel2Items = [
  "/menu/falafel.jpg",
  "/menu/hummus.jpg",
  "/menu/1.jpg",
  "/menu/3.jpg",
  "/menu/4.jpg",
  "/menu/5.jpg",
];
const panel3Items = [
  "/menu/baklava.jpg",
  "/menu/dates.jpg",
  "/menu/eastern-sweets.jpg",
];
const Panel1 = () => {
  return (
    <GridLayout
      items={panel1Items.map((src, ii) => (
        <div key={ii} className="relative aspect-video md:aspect-square">
          <Image
            layout="fill"
            src={src}
            alt=""
            className="object-cover rounded-2xl"
          />
        </div>
      ))}
    />
  );
};
const Panel2 = () => {
  return (
    <GridLayout
      items={panel2Items.map((src, ii) => (
        <div key={ii} className="relative aspect-video md:aspect-square">
          <Image
            layout="fill"
            src={src}
            alt="image"
            className="object-cover rounded-2xl"
          />
        </div>
      ))}
    />
  );
};
const Panel3 = () => {
  return (
    <GridLayout
      items={panel3Items.map((src, ii) => (
        <div key={ii} className="relative aspect-video md:aspect-square">
          <Image
            layout="fill"
            src={src}
            alt="image"
            className="object-cover rounded-2xl"
          />
        </div>
      ))}
    />
  );
};

//======================================
export const MenuTabs = () => {
  //======================================return
  return (
    <section id="#menu" className="container pb-3 mx-auto col-center">
      <h2 className="mb-2 h2">Our Top Dishes</h2>
      <div className="w-11/12 lg:w-8/12 ">
        <Tabs
          panels={[<Panel1 key={1} />, <Panel2 key={2} />, <Panel3 key={3} />]}
          tabButtons={[
            { label: "Drinks" },
            { label: "Dishes" },
            { label: "Desserts" },
          ]}
        />
      </div>
      {/* <button
  type="button"
  className="btn my-2 text-xl normal-case gap-x-2 bg-base-300 row-center"
>
  Complete Menu <CgChevronRightO className="mt-1 " />
</button> */}
    </section>
  );
};
