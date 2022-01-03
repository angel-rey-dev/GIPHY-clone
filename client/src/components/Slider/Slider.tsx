// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useState } from "react";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

type SliderProps = {
  type: string;
  elements: any;
};

export default function Slider({ elements, type }: SliderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Swiper
      // centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        stopOnLastSlide: true,
      }}
      slidesPerView={5}
      spaceBetween={10}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={false}
      // pagination={{
      //   clickable: true,
      // }}
      navigation={true}
      className="mySwiper"
    >
      {elements[type].map((el: any) => (
        <SwiperSlide key={el.id}>
          <Link to={`/gifs/${encodeURI(el.id)}`} state={{ ...el }}>
            <img
              className={isLoaded ? "loaded" : ""}
              key={el.id}
              onLoad={() => setIsLoaded(true)}
              src={el.images.medium}
              alt={el.title}
              // className={styles.gif}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
