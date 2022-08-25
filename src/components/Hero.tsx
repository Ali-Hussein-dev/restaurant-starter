import { ImageBg, Section } from ".";

//======================================
export const Hero = () => {
  //======================================return
  return (
    <Section id="#home">
      <div className="grid w-full place-items-center lg:place-items-start h-80 xs:px-1">
        <div className="space-y-1 text-center rounded-3xl text-white z-[1] px-4 w-full md:w-auto  py-20">
          <h1 className="mb-2 text-3xl font-extrabold md:text-5xl">
            Syrian Restaurant
            <span className="block mt-1"> With Feine Dishes in Hamburg</span>
          </h1>
          <h2 className="text-2xl">Address</h2>
        </div>
        <ImageBg />
      </div>
    </Section>
  );
};
