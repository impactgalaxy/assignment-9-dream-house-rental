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
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p>Area: {area_sqft} sq ft</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
            <div className="absolute flex justify-between items-center top-0 p-4 w-full">
                <button className="btn btn-primary text-white -rotate-45">{status}</button>
                <button className="btn btn-accent text-white">Featured</button>
            </div>
        </div>
    )
}
Residential.propTypes = {
    house: PropTypes.object
}