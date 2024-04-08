import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}>Home</NavLink></li>
            <li><NavLink to="/house-for-rent" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}>House for Rent</NavLink></li>
            <li><NavLink to="/house-for-sell" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}>House for Sell</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}>Contact</NavLink></li>
        </>
    )
    return (
        <div className="navbar bg-base-100 font-poppins font-bold flex items-center justify-between">
            <div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl font-black">Dream House Rent</Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}

                </ul>
            </div>
            <div>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <Link to="/user/login" className="btn">Log in</Link>
            </div>
        </div>
    )
}
