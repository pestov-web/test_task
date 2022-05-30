import React, { useRef } from "react";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import sliderItems from "../data/SliderItems";

function Slider() {
  const swiperRef = useRef(null);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<button aria-label="переключить слайд" class="slider__bullet ' +
        className +
        '"/>'
      );
    },
  };

  return (
    <div className="slider">
      <div
        className="slider__button slider__button-prev"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        <HiOutlineChevronLeft />
      </div>
      <div className="slider__container">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Scrollbar]}
          pagination={pagination}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              slidesPerGroup: 1,
            },
            450: {
              slidesPerView: 2,
              spaceBetween: 15,
              slidesPerGroup: 2,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 2,
            },
            // when window width is >= 480px
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
              slidesPerGroup: 3,
            },
            // when window width is >= 640px
            1300: {
              slidesPerView: 4,
              spaceBetween: 30,
              slidesPerGroup: 4,
            },
          }}
          onBeforeInit={(swiper) => {
            swiper.navigation.update();
          }}
        >
          {sliderItems.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.img} alt={item.name} />
            </SwiperSlide>
          ))}
        </Swiper>{" "}
      </div>
      <div
        className="slider__button slider__button-next"
        onClick={() => swiperRef.current.swiper.slideNext()}
      >
        <HiOutlineChevronRight />
      </div>
    </div>
  );
}

export default Slider;
