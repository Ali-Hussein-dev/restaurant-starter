import Image from "next/image";
import * as React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//======================================
export const Carousel = ({ images }: { images: { src: string }[] }) => {
  //======================================return
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={2}
      spaceBetween={20}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      }}
      centeredSlides
      className="w-full lg:w-5/6 mx-auto"
    >
      {images.map((img, i) => (
        <SwiperSlide
          key={i}
          className="mx-auto aspect-video rounded-sm overflow-hidden"
        >
          <Image
            layout="fill"
            src={img.src}
            alt="image"
            className="object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
