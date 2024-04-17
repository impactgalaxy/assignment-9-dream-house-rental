import Banner from "../../components/banner/Banner";
import Properties from "../../components/properties/Properties";
import OptionalComponents from "../../components/optional/OptionalComponents";
import App from "../../App";

export default function Home() {
    return (
        <div >
            <Banner></Banner>
            <Properties></Properties>
            <OptionalComponents></OptionalComponents>
            <div className="h-full w-full">
                <App></App>
            </div>
        </div>
    )
}
