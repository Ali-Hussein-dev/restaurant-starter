import Image from "next/image";
import * as React from "react";
import { Autoplay, EffectCards, EffectCreative, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { isMobile } from "react-device-detect";

//======================================
export const Carousel = ({ images }: { images: { src: string }[] }) => {
  //======================================return
  return (
    <Swiper
      modules={[Autoplay, EffectCards, Pagination, EffectCreative]}
      autoplay
      effect={isMobile ? "creative" : "cards"}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 5,
      }}
      className="w-full lg:w-4/6 mx-auto"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i} className="mx-auto md:aspect-video aspect-square">
          <Image
            layout="fill"
            src={img.src}
            alt="image"
            className="object-cover rounded-sm"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
