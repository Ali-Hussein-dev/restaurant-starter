import { ImageBg, Section } from ".";
import { Link as ScrollLink } from "react-scroll";
import { useRestCtx } from "../hooks";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

//======================================
export const Hero = () => {
  const {
    hero: { h1, h2, cta, img },
  } = useRestCtx();
  const { ref, inView } = useInView();
  //======================================return
  return (
    <Section id="#home">
      <div className="w-full px-1 lg:row-start row-center">
        <div
          ref={ref}
          className="space-y-1 text-center rounded-3xl lg:mb-32 mb-20 text-white z-[1] px-4 w-full  md:w-auto  py-20"
        >
          <h1
            className={clsx(
              "mb-4 text-4xl font-extrabold md:text-6xl opacity-0",
              inView && "animate-fade-down animate-delay-200"
            )}
          >
            {h1}
            <span className="block mt-1">{h2}</span>
          </h1>
          <div
            className={clsx(
              inView && "animate-fade-up animate-delay-200",
              "opacity-0"
            )}
          >
            <ScrollLink
              to="#form"
              activeClass="active"
              smooth
              className="btn text-xl normal-case rounded glass"
            >
              {cta}
            </ScrollLink>
          </div>
        </div>
        <ImageBg loading="eager" src={img} priority quality={60} />
      </div>
    </Section>
  );
};
