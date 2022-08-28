import * as React from "react";

//======================================
export const ImageBg = ({
  src = "/falafel-fresh-salad.jpg",
  brightness,
}: {
  src?: string;
  /**
   * TW class eg: brightness-[0.3]
   */
  brightness?: string;
}) => {
  //======================================return
  return (
    <div className="absolute inset-0 w-full h-full">
      <picture>
        <img
          src={src}
          alt="background"
          className={`z-0 w-full h-full object-cover ${
            brightness ? brightness : "brightness-50"
          }`}
          loading="eager"
        />
      </picture>
    </div>
  );
};
