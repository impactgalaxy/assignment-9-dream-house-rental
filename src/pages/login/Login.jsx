import { Link, useLocation, useNavigation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../contextProvider/ContextProvider";

export default function Login() {
    const { signInUser, loginWithGoogle, loginWithGithub } = useContext(AuthContext);
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);

    const signInUserWithEAndP = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigation(location.pathname);

            }).catch(error => {
                console.log(error);
            });
        console.log(email, password);

    }
    // google Login
    const googleLogin = () => {
        loginWithGoogle().then(result => {
            console.log(result.user);
        }).catch(error => {
            console.log(error);
        })
    }
    // github Login
    const githubLogin = () => {
        loginWithGithub().then(result => {
            console.log(result.user);
        }).catch(error => {
            console.log(error);
        })

    }
    return (
        <div className="lg:*:w-1/2 flex items-center gap-5 flex-col lg:flex-row">
            <Helmet>
                <title>Login -dream house rental</title>
            </Helmet>
            <div className="flex items-center justify-center gap-4">
                <h1 className="text-2xl md:text-4xl">You are most Welcome </h1>
                <p></p>

            </div>

            <div className="flex flex-col w-full border-opacity-50 p-4 lg:p-8">
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
                                <input type="text" className="grow" placeholder="Email" name="email" />
                            </label>

                            <label className="input input-bordered flex items-center gap-2 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow" placeholder="password" name="password" />
                            </label>
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
