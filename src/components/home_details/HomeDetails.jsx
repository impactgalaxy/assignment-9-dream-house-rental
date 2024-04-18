import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { BsCheck2Circle } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './style.css';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
// animate css
import 'animate.css';
// Aos
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export default function HomeDetails() {
    const [filterData, setFilterData] = useState([]);
    const data = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const d = data.filter(matchItem => matchItem.id === parseInt(id))
        setFilterData(d);
    }, [data, id]);
    return (
        <div>
            <Helmet>
                <title>Home details | {id}</title>
            </Helmet>

            {
                filterData.map(item => {
                    return (
                        <div key={item.id}>
                            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
                                <div>
                                    <p className="flex items-center gap-2"><CiLocationOn></CiLocationOn> {item.location}</p>
                                    <p className="flex items-center gap-2"><FaPhone></FaPhone> +812544444411</p>
                                    <p className="flex items-center gap-2"><MdEmail></MdEmail> admin@info.com</p>

                                </div>
                                <p className="font-bold">Only for {item.status}</p>
                            </div>
                            <div className="h-60 flex items-center justify-center bg-segmentBg bg-center bg-no-repeat bg-cover my-10">
                                <h1 className="text-2xl lg:text-4xl font-bold text-white">{item.segment_name}/<span className="text-purple-500">{item.estate_title}</span></h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-3">
                                <div className="md:col-span-2 lg:col-span-3">
                                    <div className="p-4 lg:p-8 gap-5 flex flex-col items-center">
                                        <h1 className="animate__animated  animate__infinite animate__heartBeat text-4xl text-red-700">Hot offer</h1>
                                        <h1 className="animate__animated animate__repeat-3	 animate__heartBeat animate__lightSpeedInRight">Congratulations your dreams will come true</h1>
                                        <p className="text-green-400 animate__animated  animate__repeat-3 animate__flip animate__delay-3s">Don&apos;t delay to confirm your fantastic home</p>
                                        <button className="btn btn-outline bg-gradient-to-r from-cyan-500 to-blue-500 text-xl border-none">22% discount only for you </button>

                                    </div>
                                    <hr></hr>
                                    <div className="p-4">
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
                                        <div className="h-96 p-4">
                                            <Swiper
                                                effect={'flip'}
                                                grabCursor={true}
                                                pagination={{
                                                    clickable: true
                                                }}
                                                navigation={true}
                                                modules={[EffectFlip, Pagination, Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <div className="h-80 ">
                                                        <img src="https://i.ibb.co/kMnQCmF/yansi-keim-4-U19-TDp1bw-unsplash.jpg" alt="" className="h-1/2 object-cover" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="h-80 ">
                                                        <img src="https://i.ibb.co/T1Tqdf3/r-architecture-Jv-Q0-Q5-Ike-MM-unsplash.jpg" alt="" className="h-1/2 object-cover" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="h-80 ">
                                                        <img src="https://i.ibb.co/KFnFjxH/gus-ruballo-h5-QNcl-JUi-A8-unsplash.jpg" alt="" className="h-1/2 object-cover" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="h-80 ">
                                                        <img src="https://i.ibb.co/sqYwxV2/daria-nepriakhina-MUR3s5-Fez-Jc-unsplash.jpg" alt="" className="h-1/2 object-cover" />

                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>
                                        </div>
                                        <div className="w-1/2 p-4 my-12">
                                            <h1 className="text-2xl font-bold py-4 border-b">Contact</h1>
                                            <div className="*:p-4 *:border-b">
                                                <p>Owner of the house : <span className="font-black" data-aos="fade-left">{item.owner}</span></p>
                                                <p>Office time : <span className="font-black" data-aos="fade-right">Morning 7 to night 7</span></p>
                                                <p>Address : <span className="font-black" data-aos="fade-up">Plot 6/A, Banani Dhaka</span></p>
                                                <p>Call: <span className="font-black" data-aos="fade-down">+880123456789</span></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="border-t-2 rounded-t-lg bg-blue-600 text-center text-2xl p-3">
                                        {item.status === "sale" ? <p>Only <span className="text-3xl">${item.price}</span></p> :
                                            <>
                                                <p className="border-b"><span className="text-3xl">${item.price}</span> per day</p>
                                                <p><span className="text-3xl">${item.price * 3}</span> per month</p>
                                            </>}
                                    </div>
                                    <div className="space-y-5 bg-banner rounded-b-lg bg-cover bg-no-repeat py-5">
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
                                        <button className="btn btn-accent btn-block">{item.status === "sale" ? "Buy Now" : "Instant Book"}</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
