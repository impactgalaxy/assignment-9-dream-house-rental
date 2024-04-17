import { useContext, useEffect, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextProvider/ContextProvider";
AOS.init();
export default function HouseForSale() {
    const [rent, setRent] = useState([]);
    const navigate = useNavigate();
    const { toast } = useContext(AuthContext);

    useEffect(() => {
        fetch("/rentalData.json").then(res => res.json()).then(data => setRent(data));

    }, [])
    const d = rent.filter(item => item.status === "sale");
    const confirm = () => {
        toast.success("Congratulations! Yoy buy your dream house");
        navigate("/");
    }

    return (
        <div className="overflow-hidden">
            <Helmet>
                <title>House for Sale</title>
            </Helmet>
            <div className="min-h-[calc(100vh-80px)] border bg-map bg-center bg-no-repeat bg-cover">

            </div>
            <div className="w-1/2 m-auto p-4 lg:p-10 text-center space-y-5">
                <h1 className="text-xl">These house are only for <span className="font-bold text-2xl font-poppins text-blue-600">Sale</span></h1>
                <p>Do not waste your time confirm your house</p>

            </div>
            {
                d.map(ele => {
                    return (
                        <div key={ele.id} data-aos={`${ele.id % 2 === 1 ? "fade-left" : "fade-right"}`} className="card card-side bg-base-100 shadow-xl flex gap-4 items-center lg:*:w-1/2 mb-5 flex-col lg:flex-row">
                            <div className="border"><img src={ele.house_img} alt="Movie" className="h-64 w-full object-cover block" /></div>
                            <div className="card-body">
                                <h2 className="card-title">{ele.estate_title}</h2>
                                <p>{ele.house_description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={confirm}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

