import Image from "next/image";
import * as React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//======================================
export const Carousel = ({ images }: { images: { src: string }[] }) => {
  //======================================return
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      autoplay
      effect="fade"
      pagination={{
        clickable: true,
        dynamicBullets: true,
        //   position: "1",
        dynamicMainBullets: 5,
      }}
      className="w-full lg:w-4/6"
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
