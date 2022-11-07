import * as React from "react";
import { useInView } from "react-intersection-observer";
import { Carousel } from ".";
import { useRestCtx } from "../hooks";
import clsx from "clsx";
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
  const { ref, inView } = useInView({ threshold: 0.2 });
  //======================================return
  return (
    <section id="#gallery" className="w-full px-2 element">
      <div className="max-w-2xl mx-auto">
        <h2
          ref={ref}
          className={clsx(
            "pb-4 mb-3 border-b h2 opacity-0",
            inView && "animate-fade-down"
          )}
        >
          {title}
        </h2>
        <h3
          className={clsx(
            "mb-8 font-light text-center h5 md:h4 opacity-0",
            inView && "animate-fade-up"
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolores
          quaerat nam excepturi
        </h3>
      </div>
      <Carousel images={products} />
    </section>
  );
};
