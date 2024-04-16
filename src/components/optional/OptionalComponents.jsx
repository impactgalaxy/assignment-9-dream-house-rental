import { FaCirclePlay } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function OptionalComponents() {
    return (
        <div>
            <div className="h-screen flex items-center justify-center text-white flex-col bg-house bg-center bg-no-repeat bg-cover">
                <FaCirclePlay className="text-9xl cursor-pointer hover:scale-110 transition-all"></FaCirclePlay>
                <h1 className="lg:text-6xl" data-aos="zoom-in">The Modern House</h1>

            </div>
            <div className="text-center p-4 lg:p-10 bg-polygon bg-center bg-no-repeat text-white my-12">
                <h1 className="text-2xl lg:text-4xl " data-aos="flip-up" data-aos-duration="3000">Want a house of sell? please call +880000123</h1>
            </div>
        </div>
    )
}
