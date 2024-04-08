import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    const navLinks = (
        <>
            <li><NavLink to="/home" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}></NavLink>Home</li>
            <li><NavLink to="/house-for-rent" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}></NavLink>House for Rent</li>
            <li><NavLink to="/house-for-sell" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}></NavLink>House for Sell</li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}></NavLink>About</li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}></NavLink>Contact</li>
        </>
    )
    return (
        <div className="navbar bg-base-100 font-body">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">Dream House Rent</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    )
}
