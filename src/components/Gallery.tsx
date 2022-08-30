import * as React from "react";
import { Carousel } from ".";

const images = [
  { src: "/gallery/1.jpeg" },
  { src: "/gallery/2.jpeg" },
  { src: "/gallery/3.jpeg" },
  { src: "/gallery/4.jpeg" },
];
/**
 * with Tabs
 * labels: eg. terrace, inside, outside
 *
 * without Tabs
 */
//======================================
export const Gallery = () => {
  //======================================return
  return (
    <section id="#gallery" className="w-full element">
      <h2 className="h2">Our Premises</h2>
      <Carousel images={images} />
    </section>
  );
};

// type TabsPropsT = {
//   labels: string[];
//   panels: React.ReactNode[];
// };
// const tabs = ({ labels, panels }: TabsPropsT) => {};
