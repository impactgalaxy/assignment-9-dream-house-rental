import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen absolute top-0 w-full">
            <p className="text-2xl" data-aos="fade-down">Loading...</p>

        </div>
    )
}
