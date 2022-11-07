import Image from "next/image";
import * as React from "react";
import { useInView } from "react-intersection-observer";
import { ProductT } from "../types/restaurant";
import { SvgIcon } from "./svg-icon";
import clsx from "clsx";

interface CardPropsT extends ProductT {
  variant: "no-text" | "with-text";
}
//======================================
export const Card = ({
  src,
  variant,
  name: title,
  body,
  price,
  isVegan,
  isHalal,
  isVegi,
  isSpicy,
  index,
}: CardPropsT & { index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  //======================================return
  switch (variant) {
    case "no-text":
      return (
        <div
          ref={ref}
          className={clsx(
            "relative lg:max-w-[14rem] aspect-video md:aspect-square mask mask-wide md:mask-squircle mx-auto",
            inView && "animate-fade-up",
            index == 0 && "animate-delay-[400ms]",
            index == 1 && "animate-delay-[500ms]",
            index == 2 && "animate-delay-[600ms]",
            index == 3 && "animate-delay-[700ms]",
            index == 4 && "animate-delay-[800ms]",
            index == 5 && "animate-delay-[900ms]",
            index == 6 && "animate-delay-[1000ms]"
          )}
        >
          <Image
            fill
            src={src}
            quality="50"
            loading="eager"
            alt="image"
            className="object-cover duration-700 hover:scale-110 "
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=)"
          />
        </div>
      );
    case "with-text":
      return (
        <div
          ref={ref}
          className={clsx(
            "relative overflow-hidden  group aspect-[4/3] rounded-2xl",
            inView && "animate-fade-up",
            index == 0 && "animate-delay-[400ms]",
            index == 1 && "animate-delay-[500ms]",
            index == 2 && "animate-delay-[600ms]",
            index == 3 && "animate-delay-[700ms]",
            index == 4 && "animate-delay-[800ms]",
            index == 5 && "animate-delay-[900ms]",
            index == 6 && "animate-delay-[1000ms]"
          )}
        >
          <div className="absolute inset-0 z-10 grid px-2 prose duration-1000 opacity-0 group-hover:opacity-100 bg-base-300/70 backdrop-blur-sm place-items-end">
            <div className="pb-1">
              {/* title & body */}
              <div className="mb-1 border-b">
                <h2 className="mb-1 ">{title} </h2>
                <p className="mb-1 ">{body}</p>
              </div>
              {/* icons & price */}
              <div className="row-between">
                <span className="font-semibold">
                  {price && price?.toFixed(2)}€
                </span>
                <div className="row-start gap-x-2">
                  {[
                    isVegan && "vegan",
                    isSpicy && "spicy",
                    isVegi && "vegi",
                    isHalal && "halal",
                  ]
                    .filter((val) => !!val)
                    .map((str) => (
                      <div className="fill-current w-7 h-7" key={str as string}>
                        {/* @ts-ignore-error it is correct */}
                        <SvgIcon name={str} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <Image
            fill
            loading="eager"
            src={src}
            quality="50"
            alt={title as string}
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=)"
          />
        </div>
      );
    default:
      return null;
  }
};
