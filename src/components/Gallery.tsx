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
    gallery: { products, title },
  } = useRestCtx();
  //======================================return
  return (
    <section id="#gallery" className="w-full px-2 element">
      <div className="max-w-2xl mx-auto">
        <h2 className="mb-3 h2 border-b pb-4">{title}</h2>
        <h3 className="mb-8 h5 md:h4 font-light text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolores
          quaerat nam excepturi
        </h3>
      </div>
      <Carousel images={products} />
    </section>
  );
};
