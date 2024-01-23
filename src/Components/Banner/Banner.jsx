
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import photos from "../../assets/Image/newbanner.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



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
        modules={[  Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide  className=' border-2 border-red-500' >

        <div className=' w-12/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[80vh] border-2'>

      <div className='  w-full my-8'>
      <div className=' flex justify-start items-center gap-8  '>
        <div className=' h-[60px] grid grid-cols-1 gap-2 px-4'>
        <div className="h-4 w-10 bg-orange-500"></div>
        <div className="h-4 w-10 bg-orange-500"></div>
        <div className="h-4 w-10 bg-orange-500"></div>
        </div>
        {/* TExt box */}
        <div className=''>
          <h1> <span className=' text-[70px] text-orange-500 font-salsa'>Tohura</span>
          <br/>
           <span className=' px-8 text-4xl font-bold'>Construction</span>
           </h1>
        </div>

       </div>
       <div className=' px-4 my-2  w-full'>
       <h1 className=' text-wrap text-2xl font-bold font-salsa'>
        In The Field Of Construction
       </h1>
       <p className=' text-justify my-4'>
        Ingound Company is one of the most prominent real estate development companies in the industry today.
        Founded in 1960, our exoerience in providing properties is more affordable, high quility,varied, and comfortable for you and your loved one to live in.
       </p>
       </div>
       <div className=' px-4 my-4'>
        <img src={photos}></img>
       </div>
      </div>


       {/* Meddele Point Course */}
       <div className=' h-full w-4/12 bg-blue-500 '>

       </div>
       <div className=' h-full w-4/12 bg-slate-500 '>

       </div>
      
        </div>
        </SwiperSlide>


      </Swiper>
    </>
  );
}
