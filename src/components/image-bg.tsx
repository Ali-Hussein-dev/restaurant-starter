import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import * as React from "react";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  //======================================return
  return (
    <div className="absolute inset-0 w-full h-full" ref={ref}>
      <Image
        src={src}
        alt="background"
        fill
        quality="50"
        className={clsx(
          `w-full h-full image-full object-cover ${
            brightness ? brightness : "brightness-50"
          } opacity-0`,
          inView && "animate-fade"
        )}
        {...rest}
      />
    </div>
  );
};
