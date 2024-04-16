import { useContext } from "react";
import Navbar from "../navbar/Navbar";
import { AuthContext } from "../../contextProvider/ContextProvider";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";

export default function Profile() {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex items-center flex-col lg:flex-row ">
                <div className="p-5 lg:w-1/2">
                    <h1 className="text-2xl text-white">Hi, {user?.displayName || 'Abroad'}</h1>
                    <p>Your Email {user?.email || <Link to="/user/login" className="font-black">Please log in</Link>}</p>
                    {
                        user && <button className="btn">Update Profile</button>
                    }
                </div>
                <div className="p-5 border lg:w-1/2">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="h-96 ">
                                <img src="https://i.ibb.co/kMnQCmF/yansi-keim-4-U19-TDp1bw-unsplash.jpg" alt="" className="h-1/2 object-cover" />
                                <h1>Your Small Home</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-96 ">
                                <img src="https://i.ibb.co/sqYwxV2/daria-nepriakhina-MUR3s5-Fez-Jc-unsplash.jpg" alt="" className="h-1/2 object-cover" />
                                <h1>Your Tine House</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-96 ">
                                <img src="https://i.ibb.co/ZW9n29d/harper-van-mourik-0yf-WDw-HOB0g-unsplash.jpg" alt="" className="h-1/2 object-cover" />
                                <h1>Your Dream Home</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-96 ">
                                <img src="https://i.ibb.co/N3PKM1b/sam-e-y-Ew-C3w6bi-TA-unsplash.jpg" alt="" className="h-1/2 object-cover" />
                                <h1>Your Fantastic Home</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-96 ">
                                <img src="https://i.ibb.co/98PRmtC/jakub-zerdzicki-La-Ue5i-Mc-HRo-unsplash.jpg" alt="" className="h-1/2 object-cover" />
                                <h1>Your Haven of Earth</h1>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    )
}
