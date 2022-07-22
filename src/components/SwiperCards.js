// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import '../scss/index.scss'
import "swiper/scss";
import "swiper/scss/pagination";


// import required modules
import { Pagination } from "swiper";
import swiperCardsImgs from "../Utils/swiperCardsMockImgs";

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
        {swiperCardsImgs.map((imageCard,index)=>{
          const{image,info}=imageCard
          return(
            <SwiperSlide key={index}>
            <img src={image} className="rounded " alt={info}/>
            </SwiperSlide>
          )
        })
        }
      </Swiper>
    </>
  );
}
export default SwiperCards