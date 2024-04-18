import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import './App.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}

        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div >
            <img src="https://i.ibb.co/kMnQCmF/yansi-keim-4-U19-TDp1bw-unsplash.jpg" alt="" className="h-1/2 object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.ibb.co/kMnQCmF/yansi-keim-4-U19-TDp1bw-unsplash.jpg" alt="" className="h-1/2 object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.ibb.co/kMnQCmF/yansi-keim-4-U19-TDp1bw-unsplash.jpg" alt="" className="h-1/2 object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.ibb.co/kMnQCmF/yansi-keim-4-U19-TDp1bw-unsplash.jpg" alt="" className="h-1/2 object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.ibb.co/kMnQCmF/yansi-keim-4-U19-TDp1bw-unsplash.jpg" alt="" className="h-1/2 object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.ibb.co/kMnQCmF/yansi-keim-4-U19-TDp1bw-unsplash.jpg" alt="" className="h-1/2 object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.ibb.co/kMnQCmF/yansi-keim-4-U19-TDp1bw-unsplash.jpg" alt="" className="h-1/2 object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.ibb.co/kMnQCmF/yansi-keim-4-U19-TDp1bw-unsplash.jpg" alt="" className="h-1/2 object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="https://i.ibb.co/kMnQCmF/yansi-keim-4-U19-TDp1bw-unsplash.jpg" alt="" className="h-1/2 object-cover" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
