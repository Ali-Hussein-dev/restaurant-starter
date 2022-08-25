import * as React from "react";

//======================================
export const ImageBg = ({
  src = "/falafel-fresh-salad.jpg",
}: {
  src?: string;
}) => {
  //======================================return
  return (
    <div className="absolute inset-0 grid w-full h-full">
      <picture>
        <img
          src={src}
          alt="background"
          className="z-0 w-full h-full object-cover"
          loading="eager"
        />
      </picture>
    </div>
  );
};
