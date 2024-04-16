import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import Navbar from "../navbar/Navbar";
import { BsCheck2Circle } from "react-icons/bs";
import Footer from '../footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';


export default function HomeDetails() {
    const [filterData, setFilterData] = useState([]);
    const data = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const d = data.filter(matchItem => matchItem.id === parseInt(id))
        setFilterData(d);
    }, [data, id]);
    console.log(filterData);

    return (
        <div>
            <Helmet>
                <title>Home details |{id}</title>
            </Helmet>

            {
                filterData.map(item => {
                    return (
                        <div key={item.id}>
                            <div className="bg-blue-600 text-white p-3">
                                <p className="flex items-center gap-2"><CiLocationOn></CiLocationOn> {item.location}</p>
                            </div>
                            <Navbar></Navbar>
                            <div className="h-60 flex items-center justify-center bg-segmentBg bg-center bg-no-repeat bg-cover my-10">
                                <h1 className="text-4xl font-bold text-white">{item.segment_name}</h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-3">
                                <div className="md:col-span-2 lg:col-span-3">
                                    <div>
                                        <p>
                                            {item.house_description}
                                        </p>
                                        <h1 className="text-2xl font-bold py-4 border-b">Specifications</h1>
                                        <div className="">
                                            {
                                                item.facilities.map((ele, i) => <p key={i} className="flex items-center gap-2"><BsCheck2Circle></BsCheck2Circle>{ele}</p>)
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-bold py-4 border-b">Related House and Apartments</h1>

                                    </div>
                                    <div className="h-96">
                                        <Swiper
                                            effect={'flip'}
                                            grabCursor={true}
                                            pagination={true}
                                            navigation={true}
                                            modules={[EffectFlip, Pagination, Navigation]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>

                                </div>
                                <div>
                                    <div className="border-t-2 rounded-lg bg-blue-600 text-center text-2xl p-3">
                                        <p className="border-b"><span className="text-3xl">${item.price}</span> per day</p>
                                        <p><span className="text-3xl">${item.price * 3}</span> per month</p>
                                    </div>
                                    <div className="space-y-5 bg-banner bg-cover bg-no-repeat py-5">
                                        <label htmlFor="name" className="block p-2">
                                            <input type="text" name="" id="" className="input w-full" placeholder="Enter your name" />
                                        </label>
                                        <label htmlFor="email" className="block p-2">
                                            <input type="text" name="" id="" className="input w-full" placeholder="Enter your email" />
                                        </label>
                                        <label htmlFor="name" className="block p-2">
                                            <input type="text" name="" id="" className="input w-full" placeholder="Enter your address" />
                                        </label>
                                        <label htmlFor="name" className="block p-2">
                                            <input type="text" name="" id="" className="input w-full" placeholder="Enter your phone number" />
                                        </label>
                                        <label htmlFor="name" className="block p-2">
                                            <input type="date" name="" id="" className="input w-full" placeholder="Pick your date" />
                                        </label>
                                        <button className="btn btn-accent btn-block">Instant Book</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <Footer></Footer>


        </div>
    )
}
