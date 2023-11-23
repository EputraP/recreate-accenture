// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{
        backgroundColor: "white",
        color: "black",
        height: "300px",
        overflow: "hidden",
      }}
    >
      <SwiperSlide>
        <div style={{ backgroundColor: "red", width: "30px", height: "80px" }}>
          tes
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundColor: "red", width: "30px", height: "80px" }}>
          tes
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundColor: "red", width: "30px", height: "80px" }}>
          tes
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundColor: "red", width: "30px", height: "80px" }}>
          tes
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
