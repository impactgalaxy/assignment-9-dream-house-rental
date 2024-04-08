import { useEffect, useState } from "react"
import Residential from "../residential/Residential";

export default function Properties() {
    const [home, setHome] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("/rentalData.json").then(res => res.json()).then(data => setHome(data));
        setLoading(true)
    }, [])
    return (
        <div>
            <div className="p-4 md:p-8 text-center space-y-5">
                <h1 className="font-poppins text-2xl font-semibold lg:text-4xl">FEATURED PROPERTIES</h1>
                <p>There are thousand of treasure house at the near of your hand. So don&apos;t miss </p>
            </div>
            <div className="py-2 md:py-5 ">
                {
                    !loading ? <span className="loading loading-ring loading-lg"></span> : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">{home.map(item => <Residential key={item.id} house={item}></Residential>)}</div>
                    )
                }
            </div>
        </div>
    )
}
