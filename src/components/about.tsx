import Image from "next/image";
import * as React from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
//======================================
export const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div className="px-4">
      <div className="flex flex-col items-center justify-center max-w-6xl px-4 py-10 mx-auto mb-16 gap-2 border-b-4 border-l-4 rounded-bl-lg shadow lg:flex-row gap-x-4">
        <div
          ref={ref}
          className={clsx(inView && "animate-fade-right animate-delay-200")}
        >
          <h2 className="max-w-sm pb-4 border-b h2 lg:text-left ">
            Who we are?
          </h2>
          <p className="mb-4 text-lg md:text-xl lg:mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            provident tempora distinctio cum debitis, voluptas repudiandae
            asperiores eveniet accusantium quia molestias similique nesciunt
            harum omnis hic neque odio optio aut quae deleniti laborum
            doloremque unde. Fugiat, expedita voluptas? Eum consequuntur ratione
            iste asperiores illo!
          </p>
        </div>
        <div
          className={clsx(
            "relative aspect-[4/3] grow lg:w-[124rem] w-full border-2 rounded-xl overflow-hidden",
            inView && "animate-fade-left"
          )}
        >
          <Image
            src="/team.jpg"
            fill
            quality={60}
            className="absolute inset-0 w-full object-cover"
            alt="lantern"
          />
        </div>
      </div>
    </div>
  );
};
