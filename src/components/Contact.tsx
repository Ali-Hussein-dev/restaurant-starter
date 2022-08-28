import * as React from "react";
import { OpeningHours, ContactInfo, ImageBg } from "../components";
//======================================
export const Contact = () => {
  //======================================return
  return (
    <section className="relative px-6 py-20" id="#contact">
      <ImageBg src="/gallery/3.jpeg" brightness="brightness-[0.25]" />
      <div className="z-10 px-2 pt-10 mx-auto space-y-5 rounded-sm shadow-lg md:pt-16 pb-14 lg:w-4/6 lg:px-36 bg-white/20 text-slate-200 backdrop-blur-lg">
        <div className="md:row-center md:gap-x-14 lg:gap-x-24">
          <OpeningHours />
          <div className="divider md:divider-horizontal"></div>
          <ContactInfo />
        </div>
        <h2 className="text-2xl font-bold text-center lg:text-5xl md:text-4xl">
          We&apos;re looking forward to your visit
        </h2>
      </div>
    </section>
  );
};
