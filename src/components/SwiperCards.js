// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

import '../scss/index.scss'

// import required modules
import { Pagination } from "swiper";

const SwiperCards=()=> {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-5"
      >
        <SwiperSlide><img src="buzohombreblanco.jpg" alt="hola"/></SwiperSlide>
        <SwiperSlide><img src="buzohombrenegro.jpg" alt="hola"/></SwiperSlide>
        <SwiperSlide><img src="buzomujerblanco.jpg" alt="hola"/></SwiperSlide>
        <SwiperSlide><img src="pantalonhombre.jpg" alt="hola"/></SwiperSlide>
        <SwiperSlide><img src="pantalonmujerblanco.jpg" alt="hola"/></SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwiperCards