import Image from "next/image";
import * as React from "react";
import { Pagination, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//======================================
export const Carousel = ({ images }: { images: { src: string }[] }) => {
  //======================================return
  return (
    <div>
      <Swiper
        modules={[Pagination, Mousewheel]}
        slidesPerView={2}
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
          "w-full lg:w-5/6 mx-auto overflow-hidden box-border py-0 h-auto"
        }
      >
        {images.map((img, i) => (
          <SwiperSlide
            key={i}
            className="relative border w-full overflow-hidden rounded"
          >
            <Image
              layout="responsive"
              width={400}
              height={300}
              src={img.src}
              alt="image"
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
