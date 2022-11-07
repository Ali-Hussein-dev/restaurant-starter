import Image from "next/image";
import * as React from "react";
import { isMobileOnly } from "react-device-detect";
import { Pagination, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//======================================
export const Carousel = ({ images }: { images: { src: string }[] }) => {
  //======================================return
  return (
    <div>
      <Swiper
        modules={[Pagination, Mousewheel]}
        slidesPerView={isMobileOnly ? 1 : 2}
        spaceBetween={20}
        mousewheel
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        slideToClickedSlide
        centeredSlides
        autoHeight
        className={
          "w-full lg:w-5/6 mx-auto overflow-hidden box-border py-0 h-80 sm:h-auto"
        }
      >
        {images.map((img, i) => (
          <SwiperSlide
            key={i}
            className="relative overflow-hidden border rounded aspect-video"
          >
            <Image
              loading="eager"
              fill
              quality={45}
              src={img.src}
              alt="image"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=)"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
