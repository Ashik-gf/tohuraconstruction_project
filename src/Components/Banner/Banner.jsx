
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import photos from '../../assets/Image/Banner.jpg';
import photos2 from '../../assets/Image/banner3.png';
import photos3 from '../../assets/Image/banner4.png';
import photos4 from '../../assets/Image/banner5.png';

export default function Banner() {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide >
        <div className=' flex justify-center items-center'>
          <img className=' h-[90vh] md:h-[80vh] w-[900px]' src={photos} />
        </div>
        </SwiperSlide>

        <SwiperSlide >
        <div className=' flex justify-center items-center'>
          <img className=' h-[90vh] md:h-[80vh] w-[900px]' src={photos} />
        </div>
        </SwiperSlide>

        <SwiperSlide >
        <div className=' flex justify-center items-center'>
          <img className=' h-[90vh] md:h-[80vh] w-[900px]' src={photos} />
        </div>
        </SwiperSlide>

        <SwiperSlide >
        <div className=' flex justify-center items-center'>
          <img className=' h-[90vh] md:h-[80vh] w-[900px]' src={photos} />
        </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
