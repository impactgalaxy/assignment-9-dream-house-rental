import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import "../../styles.css"
export default function Banner() {
    return (
        <div className="h-[700px] lg:h-[500px] bg-banner bg-no-repeat bg-center bg-cover flex flex-col lg:flex-row gap-4 items-center justify-center">
            <div className="p-3 md:p-6 lg:p-8 text-center space-y-6 ">
                <h1 className="md:text-2xl lg:text-5xl font-black text-white">Make Your Home</h1>
                <p className="text-xl text-white">Make Your Dream</p>
                <p className="text-white">Buy Your Happiness</p>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                navigation={true}
                autoplay={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper lg:w-1/2 h-full ">
                <SwiperSlide>
                    <div className="h-96">
                        <img src="https://i.ibb.co/kMnQCmF/yansi-keim-4-U19-TDp1bw-unsplash.jpg" alt="" className="h-1/2 object-cover" />
                        <h1>Your Dream</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-96 ">
                        <img src="https://i.ibb.co/T1Tqdf3/r-architecture-Jv-Q0-Q5-Ike-MM-unsplash.jpg" alt="" className="h-1/2 object-cover" />
                        <h1>Tiny House</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-96 ">
                        <img src="https://i.ibb.co/R7V6QsP/flo-pappert-ksp-Rwq-Fx-Oms-unsplash.jpg" alt="" className="h-1/2 object-cover" />
                        <h1>Make Dream True</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-96 ">
                        <img src="https://i.ibb.co/KFnFjxH/gus-ruballo-h5-QNcl-JUi-A8-unsplash.jpg" alt="" className="h-1/2 object-cover" />
                        <h1>Earth Haven</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-96 ">
                        <img src="https://i.ibb.co/HB9LfnL/steven-ungermann-OSj-YZhgw67-M-unsplash.jpg" alt="" className="h-1/2 object-cover" />
                        <h1>Supper Gorgeous</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-96 ">
                        <img src="https://i.ibb.co/sqYwxV2/daria-nepriakhina-MUR3s5-Fez-Jc-unsplash.jpg" alt="" className="h-1/2 object-cover" />
                        <h1>Fantastic Home</h1>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
