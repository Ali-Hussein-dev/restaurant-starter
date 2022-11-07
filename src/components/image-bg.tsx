import Image, { ImageProps } from "next/image";
import * as React from "react";

//======================================
export const ImageBg = ({
  src = "/falafel-fresh-salad.jpg",
  brightness,
  ...rest
}: {
  src?: string;
  /**
   * TW class eg: brightness-[0.3]
   */
  brightness?: string;
} & Partial<ImageProps>) => {
  //======================================return
  return (
    <div className="absolute inset-0 w-full h-full">
      <Image
        src={src}
        alt="background"
        fill
        className={`w-full h-full image-full object-cover ${
          brightness ? brightness : "brightness-50"
        }`}
        {...rest}
      />
    </div>
  );
};
