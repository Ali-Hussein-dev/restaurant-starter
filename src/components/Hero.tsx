import { ImageBg, Section } from ".";

//======================================
export const Hero = () => {
  //======================================return
  return (
    <Section id="#home">
      <div className="w-full px-1 lg:row-start row-center">
        <div className="space-y-1 text-center rounded-3xl lg:mb-32 mb-20 text-white z-[1] px-4 w-full  md:w-auto  py-20">
          <h1 className="mb-2 text-4xl font-extrabold md:text-6xl">
            Syrian Restaurant
            <span className="block mt-1"> With Feine Dishes </span>
            <span className="block mt-1">in Hamburg</span>
          </h1>
          <button
            type="button"
            // className="px-2 text-2xl rounded-lg bg-gradient-to-r from-stone-400 to-yello-400"
            className="text-2xl"
          >
            Address
          </button>
        </div>
        <ImageBg loading="eager" />
      </div>
    </Section>
  );
};
