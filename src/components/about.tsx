import Image from "next/image";
import * as React from "react";

//======================================
export const About = () => {
  //======================================return
  return (
    <div className="px-4">
      <div className="max-w-6xl mx-auto px-4 lg:flex-row items-center flex flex-col justify-center shadow border-b-4 border-l-4 mb-16 rounded-bl-lg  gap-2 gap-x-4 py-10">
        <div className="" data-aos="fade-up">
          <h2 className="h2 lg:text-left border-b pb-4 max-w-sm ">
            Who we are?
          </h2>
          <p className="text-lg  md:text-xl mb-4 lg:mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            provident tempora distinctio cum debitis, voluptas repudiandae
            asperiores eveniet accusantium quia molestias similique nesciunt
            harum omnis hic neque odio optio aut quae deleniti laborum
            doloremque unde. Fugiat, expedita voluptas? Eum consequuntur ratione
            iste asperiores illo!
          </p>
        </div>
        <div className="relative aspect-[4/3] grow lg:w-[124rem] w-full border-2 rounded-xl overflow-hidden">
          <Image
            src="/team.jpg"
            layout="fill"
            className="object-cover absolute inset-0 w-full"
            // data-aos="zoom-in"
            alt="lantern"
          />
        </div>
        {/* <div className="relative aspect-[3/6] h-96">
          <Image
            src="/lantern_black.png"
            layout="fill"
            className="object-cover"
            data-aos="zoom-in"
            alt="lantern"
          />
        </div> */}
      </div>
    </div>
  );
};
