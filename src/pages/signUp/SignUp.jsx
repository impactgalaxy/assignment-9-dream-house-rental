import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../../contextProvider/ContextProvider";
import { ImCross } from "react-icons/im";


export default function SignUp() {
    const [showPassword, setPassword] = useState(false);
    const [warning, setWarning] = useState("");
    const navigate = useNavigate();
    const { createUser, toast } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const regEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (!regEx.test(password)) {
            toast.error("Sorry! Try again");
            return setWarning("Please ensure at least one lowercase letter at least one uppercase letter and 6 character in length");
        }
        createUser(email, password)
            .then(() => {
                toast.success("You successfully sign up");
                navigate("/");
            })
            .catch(error => {
                const e = error.message.split("/")[1].split("-")[0];
                toast.error(`Sorry! ${e}`);
            })
    }
    return (
        <div className="lg:*:w-1/2 flex items-center gap-5 flex-col lg:flex-row">
            <Helmet>
                <title>Sign up -dream house rental</title>
            </Helmet>
            <div className="flex items-center justify-center gap-4">
                <h1 className="text-2xl md:text-4xl">You are most Welcome </h1>


            </div>
            <div className="relative p-4 lg:p-8">
                <Link to="/" title="Cancel" className="absolute top-0 right-3 hover:bg-slate-400 p-4 rounded-full">
                    <ImCross></ImCross>
                </Link>

                <div>
                    <h1 className="text-3xl font-semibold">Sign Up</h1>
                    <p className="font-bold text-right my-3">Already have an account? <Link className="text-green-800" to="/user/login">Sign in</Link></p>

                </div>
                <div >
                    <div>
                        <form onSubmit={handleRegister}>
                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" className="grow" placeholder="Email" name="email" required />
                            </label>

                            <label className="input input-bordered flex items-center gap-2 mb-3 relative">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type={showPassword ? "text" : "password"} className="grow" placeholder="password" name="password" required onFocus={() => setWarning("")} />
                                <div className="absolute top-1/2 -translate-y-1/2 right-4 *:text-2xl cursor-pointer" onClick={() => setPassword(!showPassword)}>
                                    {
                                        showPassword ? <IoMdEye></IoMdEye> : <IoMdEyeOff></IoMdEyeOff>
                                    }
                                </div>
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow" placeholder="Name" name="name" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow" placeholder="Photo URL" name="photo" />
                            </label>
                            <p className="text-red-700 font-bold">{warning}</p>
                            <div className="py-5">

                                <button className="btn btn-block btn-active btn-accent">Sign up</button>
                            </div>
                            <div className="space-y-4">
                                <p>By signing up you agree to our <a className="link">Terms of Service</a> and <a className="link">Privacy Policy</a></p>
                                <label htmlFor="notification" className="flex items-center gap-2">
                                    <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                                    Email me with news and updates
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
