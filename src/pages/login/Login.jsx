import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { AuthContext } from "../../contextProvider/ContextProvider";
import { ImCross } from "react-icons/im";

export default function Login() {
    const [showPassword, setPassword] = useState(false);
    const [warning, setWarning] = useState("");
    const { signInUser, loginWithGoogle, loginWithGithub, toast } = useContext(AuthContext);
    const navigation = useNavigate();
    const location = useLocation();

    const signInUserWithEAndP = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(() => {
                if (location.state === null) {
                    navigation("/");
                }
                else {
                    navigation(location.state);
                }
                toast.success("Successfully login");
                e.target.reset();
                setWarning("");

            }).catch(error => {
                const e = error.message.split("/")[1].split("-")[0];
                setWarning("Invalid username or password")
                toast.error(`Sorry! ${e}`);
            });


    }
    // google Login
    const googleLogin = () => {
        loginWithGoogle().then(() => {
            toast.success("Login successful");
            if (location.state === null) {
                navigation("/");
            }
            else {
                navigation(location.state);
            }
        }).catch(error => {
            const e = error.message.split("/")[1].split("-")[0];
            toast.error(`Sorry! ${e}`);
        })
    }
    // github Login
    const githubLogin = () => {
        loginWithGithub().then(() => {
            if (location.state === null) {
                navigation("/");
            }
            else {
                navigation(location.state);
            }
            toast.success("Successfully login");
        }).catch(error => {
            const e = error.message.split("/")[1].split("-")[0];
            toast.error(`Sorry! ${e}`);
        })

    }
    return (
        <div className="lg:*:w-1/2 flex items-center gap-5 flex-col lg:flex-row">
            <Helmet>
                <title>Login-dream house rental</title>
            </Helmet>
            <div className="flex items-center justify-center gap-4">
                <h1 className="text-2xl md:text-4xl">You are most Welcome </h1>
                <p></p>

            </div>

            <div className="p-4 lg:p-8 relative">
                <Link to="/" title="Cancel" className="absolute top-0 right-3 hover:bg-slate-400 p-4 rounded-full">
                    <ImCross></ImCross>
                </Link>
                <div>
                    <h1 className="text-3xl font-semibold">Log In</h1>
                    <p className="font-bold text-right my-3">Don&apos;t have an account? <Link className="text-green-800" to="/user/signUp">Sign Up</Link></p>
                    <div className="grid grid-cols-2 gap-4 justify-items-center">
                        <button className="btn btn-outline btn-block" onClick={googleLogin}>Google <FcGoogle></FcGoogle></button>
                        <button className="btn btn-outline btn-block" onClick={githubLogin}>Github <FaGithub></FaGithub></button>
                        <button className="btn btn-outline btn-block">Facebook <FaFacebookF className="text-blue-600"></FaFacebookF></button>
                        <button className="btn btn-outline btn-block">Twitter <FaXTwitter className="text-blue-600"></FaXTwitter></button>
                    </div>
                </div>
                <div className="divider my-8">OR</div>
                <div >
                    <div>
                        <form onSubmit={signInUserWithEAndP}>
                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" className="grow" placeholder="Email" name="email" required />
                            </label>

                            <label className="input input-bordered flex items-center gap-2 mb-3 relative">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type={showPassword ? "text" : "password"} className="grow" placeholder="password" name="password" required />
                                <div className="absolute top-1/2 -translate-y-1/2 right-4 *:text-2xl cursor-pointer" onClick={() => setPassword(!showPassword)}>
                                    {
                                        showPassword ? <IoMdEye></IoMdEye> : <IoMdEyeOff></IoMdEyeOff>

                                    }

                                </div>
                            </label>
                            <p className="text-red-600">{warning}</p>
                            <div className="grid grid-cols-2 justify-items-center gap-4 py-5">
                                <div className="btn btn-block btn-outline">Forgot Password?</div>
                                <button className="btn btn-block btn-active btn-accent">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
