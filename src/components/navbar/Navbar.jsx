import { useContext, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../contextProvider/ContextProvider";
import defaultUser from "../../assets/user.png";

export default function Navbar() {
    const [profile, setProfile] = useState(false);
    const { user, userLogout, toast } = useContext(AuthContext);
    const handleLogout = () => {
        userLogout()
            .then(() => {
                toast.success("Logout successful");
            })
            .catch(error => {
                const e = error.message.split("/")[1].split("-")[0];
                toast.error(`Sorry! ${e}`);
            })
    }
    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}>Home</NavLink></li>
            <li><NavLink to="/house-for-rent" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}>House for Rent</NavLink></li>
            <li><NavLink to="/house-for-sell" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}>House for Sell</NavLink></li>
            <li><NavLink to="/update-profile" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}>Update Profile</NavLink></li>

            {
                user && <li><NavLink to="/user-profile" className={({ isActive }) => isActive ? "text-green-700 border-b" : ""}>User Profile</NavLink></li>
            }
        </>
    )
    return (
        <div className="navbar bg-base-100 font-poppins font-bold flex items-center justify-between z-10 fixed top-0 left-0 w-full">
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
                {
                    user && <div onClick={() => setProfile(!profile)} className="btn btn-ghost btn-circle avatar relative" title={`${user ? user?.displayName : ""}`}>

                        <div className={`w-10 rounded-full`}>
                            {
                                user?.photoURL ? <img src={user.photoURL} /> : <img src={defaultUser} />
                            }

                        </div>
                    </div>
                }
                {
                    user ? <button className="btn btn-outline" onClick={handleLogout}>Log out</button> : <Link to="/user/login" className="btn font-semibold rounded-none border-none bg-[#403F3F] text-white">Login</Link>
                }
            </div>
            <div className={`absolute flex items-center gap-4 justify-start flex-col right-0 top-16 rounded-2xl h-96 w-80 border z-10 bg-slate-100 ${profile && user !== null ? "" : "hidden"} bg-[url("/bg.svg")] bg-no-repeat bg-center bg-cover py-10`}>
                <div className={`w-10 rounded-full`}>
                    {
                        user?.photoURL ? <img src={user.photoURL} /> : <img src={defaultUser} className="rounded-full" />
                    }
                </div>
                <h1 className="text-white text-xl">{user?.displayName}</h1>
                <Link to="/user-profile" className="btn">View Profile</Link>

            </div>

        </div>
    )
}
