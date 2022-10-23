import Image from "next/image";
import * as React from "react";
import { ProductT } from "../types/restaurant";
import { SvgIcon } from "./svg-icon";

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
  const animation = {
    "data-aos": "flip-up",
    "data-aos-delay": 500 + index * 100,
  };
  //======================================return
  switch (variant) {
    case "no-text":
      return (
        <div
          className="relative aspect-video md:aspect-square md:mask md:mask-squircle "
          {...animation}
        >
          <Image
            layout="fill"
            src={src}
            alt="image"
            className="object-cover duration-700 hover:scale-110 xs:rounded-3xl"
          />
        </div>
      );
    case "with-text":
      return (
        <div className="relative group aspect-square " {...animation}>
          <div className="absolute inset-0 z-10 grid px-2 prose duration-1000 opacity-0 group-hover:opacity-100 bg-base-300/70 backdrop-blur-sm place-items-end ">
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
            layout="fill"
            src={src}
            alt={title}
            className="object-cover rounded-2xl"
          />
        </div>
      );
    default:
      return null;
  }
};
