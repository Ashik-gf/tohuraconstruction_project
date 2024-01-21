
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import photos from '../../assets/Image/banner.png';
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
        <div className=' relative'>
          <img className=' h-[350px] w-full' src={photos} />
          <div className=' bg-black bg-opacity-50 absolute
           top-[40%] left-[18%] md:top-[40%] md:left-[22%] lg:top-[40%] lg:left-[25%]
           rounded-2xl px-2 py-3'>
            <h1 className=' md:text-2xl lg:text-4xl text-white font-bold'>
              M/S Towhura Constructions And RealState
            </h1>
            <p className=' text-white text-center text-xl'>Your Work is Our Responceablity</p>
            <div className=" flex justify-center items-center">
          <button className=" hover:border-b-4 border-white text-white border-2 rounded-b-md rounded-t-md px-4">
            Visit Us
          </button>
        </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className=' relative'>
          <img className=' h-[350px] w-full' src={photos2} />
          <div className=' bg-black bg-opacity-50 absolute
           top-[40%] left-[18%] md:top-[40%] md:left-[22%] lg:top-[40%] lg:left-[25%]
            rounded-2xl px-2'>
            <h1 className=' md:text-2xl lg:text-4xl text-white font-bold'>
              M/S Towhura Constructions And RealState
            </h1>
            <p className=' text-white text-center text-xl'>Your Work is Our Responceablity</p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className=' relative'>
          <img className=' h-[350px] w-full' src={photos3} />
          <div className=' bg-black bg-opacity-50 absolute
           top-[40%] left-[18%] md:top-[40%] md:left-[22%] lg:top-[40%] lg:left-[25%]
            rounded-2xl px-2'>
            <h1 className=' md:text-2xl lg:text-4xl text-white font-bold'>
              M/S Towhura Constructions And RealState
            </h1>
            <p className=' text-white text-center text-xl'>Your Work is Our Responceablity</p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className=' relative'>
          <img className=' h-[350px] w-full' src={photos4} />
          <div className=' bg-black bg-opacity-50 absolute
           top-[40%] left-[18%] md:top-[40%] md:left-[22%] lg:top-[40%] lg:left-[25%]
            rounded-2xl px-2'>
            <h1 className=' md:text-2xl lg:text-4xl text-white font-bold'>
              M/S Towhura Constructions And RealState
            </h1>
            <p className=' text-white text-center text-xl'>Your Work is Our Responceablity</p>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
