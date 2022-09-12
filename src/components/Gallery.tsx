import * as React from "react";
import { Carousel } from ".";
import { useRestCtx } from "../hooks";

/**
 * with Tabs
 * labels: eg. terrace, inside, outside
 *
 * without Tabs
 */
//======================================
export const Gallery = () => {
  const {
    gallery: { images, title },
  } = useRestCtx();
  //======================================return
  return (
    <section id="#gallery" className="w-full px-2 element">
      <h2 className="mb-8 h2">{title}</h2>
      <Carousel images={images} />
    </section>
  );
};

// type TabsPropsT = {
//   labels: string[];
//   panels: React.ReactNode[];
// };
// const tabs = ({ labels, panels }: TabsPropsT) => {};
