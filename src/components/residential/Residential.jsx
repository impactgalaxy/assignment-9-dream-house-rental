import { CiLocationOn } from "react-icons/ci";
import PropTypes from "prop-types";

export default function Residential({ house }) {
    const { id, estate_title, location, area_sqft, facilities, owner, price, house_img, status, segment_name } = house;
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl font-poppins">
            <figure><img src={house_img} alt={estate_title} className="h-[300px] w-full block m-auto object-cover" /></figure>
            <div className="card-body">
                <div className="flex text-lg gap-1 items-center"><CiLocationOn></CiLocationOn> {location}</div>
                <h2 className="card-title">{estate_title}</h2>
                <div className="flex justify-between">
                    <p>Area: {area_sqft} sq ft</p>
                    <p>{status === "rent" ? `$ ${price} per night` : `Price: $ ${price}`}</p>
                </div>
                <ul className="p-4 "><span className="font-bold">Facilities</span> {facilities.map((item, idx) => <li className="list-disc" key={idx}>{item}</li>)}</ul>
                <div className="card-actions justify-end">
                    <button className="btn bg-gradient-to-r from-purple-500 to-pink-500">Details</button>
                </div>
            </div>
            <div className="absolute flex justify-between items-center top-0 p-4 w-full">
                <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white -rotate-12">For {status}</button>
                <button className="btn btn-accent text-white">Featured</button>
            </div>
        </div>
    )
}
Residential.propTypes = {
    house: PropTypes.object
}