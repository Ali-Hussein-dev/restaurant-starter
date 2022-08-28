import * as React from "react";
import { OpeningHours, ContactInfo, ImageBg } from "../components";
//======================================
export const Contact = () => {
  //======================================return
  return (
    <section className="relative px-6 py-14" id="#contact">
      <ImageBg src="/gallery/3.jpeg" brightness="brightness-[0.25]" />
      <div className="z-10 px-2 pt-10 mx-auto space-y-6 rounded-sm shadow-lg md:pt-14 pb-10 lg:w-4/6 bg-white/20 text-slate-200 backdrop-blur-xl">
        <div className="md:row-center md:gap-x-14 lg:gap-x-24">
          <OpeningHours />
          <div className="divider md:divider-horizontal"></div>
          <ContactInfo />
        </div>
        <h2 className="h4">We&apos;re looking forward to your visit</h2>
      </div>
    </section>
  );
};
