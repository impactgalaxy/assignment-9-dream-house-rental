import { useEffect, useState } from "react"
import Residential from "../residential/Residential";

export default function Properties() {
    const [home, setHome] = useState([]);

    useEffect(() => {
        fetch("/rentalData.json").then(res => res.json()).then(data => setHome(data));
    }, [])
    return (
        <div>
            <h1 className="font-poppins text-2xl">FEATURED PROPERTIES</h1>
            <div>
                {
                    home.map(element => <Residential key={element.id} house={element}></Residential>)
                }
            </div>
        </div>
    )
}
