// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import '../scss/index.scss'
import "swiper/scss";
import "swiper/scss/pagination";


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
        className="mySwiper my-5 sliderWrapper"
      >
        <SwiperSlide><img src="buzohombreblanco.jpg" className="rounded " alt="buzo"/></SwiperSlide>
        <SwiperSlide><img src="buzohombrenegro.jpg" className="rounded" alt="buzo"/></SwiperSlide>
        <SwiperSlide><img src="buzomujerblanco.jpg" className="rounded" alt="buzo"/></SwiperSlide>
        <SwiperSlide><img src="pantalonhombre.jpg" className="rounded" alt="pantalon"/></SwiperSlide>
        <SwiperSlide><img src="pantalonmujerblanco.jpg" className="rounded" alt="pantalon"/></SwiperSlide>
        <SwiperSlide><img src="remera-mujer-blanca.jpg" className="rounded" alt="pantalon"/></SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwiperCards