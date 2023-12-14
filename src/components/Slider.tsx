import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Slider() {
  const slides = [
    {
      imgSrc: "../../public/slider/img1.png",
      text: "Slide 1",
    },
    {
      imgSrc: "../../public/slider/img2.png",
      text: "Slide 2",
    },
    {
      imgSrc: "../../public/slider/img3.png",
      text: "Slide 3",
    },
    {
      imgSrc: "../../public/slider/img4.png",
      text: "Slide 4",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper h-[100vh] bg-red-300 "
      >
        {slides.map((slider, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={slider.imgSrc} alt={slider.text}  className="h-full w-full"/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
