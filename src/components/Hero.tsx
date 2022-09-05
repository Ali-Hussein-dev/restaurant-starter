import { ImageBg, Section } from ".";
import { Link as ScrollLink } from "react-scroll";

//======================================
export const Hero = () => {
  //======================================return
  return (
    <Section id="#home">
      <div className="w-full px-1 lg:row-start row-center">
        <div className="space-y-1 text-center rounded-3xl lg:mb-32 mb-20 text-white z-[1] px-4 w-full  md:w-auto  py-20">
          <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
            Syrian Restaurant
            <span className="block mt-1"> With Feine Dishes </span>
            <span className="block mt-1 ">in Hamburg</span>
          </h1>
          <ScrollLink
            to="#form"
            activeClass="active"
            smooth
            className="btn text-xl normal-case rounded glass"
          >
            Book a table
          </ScrollLink>
        </div>
        <ImageBg loading="eager" />
      </div>
    </Section>
  );
};
