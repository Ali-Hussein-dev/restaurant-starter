import * as React from "react";
import { Carousel } from ".";

const images = [
  { src: "/gallery/1.jpeg" },
  { src: "/gallery/2.jpeg" },
  { src: "/gallery/3.jpeg" },
  { src: "/gallery/4.jpeg" },
];
//======================================
export const Gallery = () => {
  //======================================return
  return (
    <section id="#gallery" className="w-full row-center element">
      <Carousel images={images} />
    </section>
  );
};
