import * as React from "react";
import Image from "next/image";
import { Pagination, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//======================================
export const Carousel = ({ images }: { images: { src: string }[] }) => {
  //======================================return
  return (
    <Swiper
      modules={[Pagination, Zoom]}
      slidesPerView={2}
      initialSlide={0}
      spaceBetween={15}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      }}
      zoom
      centeredSlides
      className="w-full mx-auto lg:w-11/12"
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
