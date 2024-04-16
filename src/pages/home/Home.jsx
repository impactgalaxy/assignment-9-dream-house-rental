import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import Properties from "../../components/properties/Properties";
import Footer from "../../components/footer/Footer";
import OptionalComponents from "../../components/optional/OptionalComponents";

export default function Home() {
    return (
        <div >
            <Navbar></Navbar>
            <Banner></Banner>
            <Properties></Properties>
            <OptionalComponents></OptionalComponents>
            <Footer></Footer>
        </div>
    )
}
