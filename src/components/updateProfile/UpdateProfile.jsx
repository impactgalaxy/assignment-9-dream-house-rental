import { useContext } from "react";
import { AuthContext } from "../../contextProvider/ContextProvider";

export default function UpdateProfile() {
    const { userProfileUpdate } = useContext(AuthContext);
    const updateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        userProfileUpdate(name, photoUrl)
            .then(() => {
                console.log("Profile Update successfully");
            })
            .catch(error => {
                console.log(error);
            })
        console.log(name, photoUrl);

    }
    return (
        <div className="lg:w-1/2 m-auto text-center p-3 md:p-6">
            <h1 className="py-5 text-2xl">Here you are going to update your profile</h1>
            <div>
                <form onChange={updateProfile}>

                    <label className="input input-bordered flex items-center gap-2 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Name" name="name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Photo URL" name="photoUrl" />
                    </label>
                    <div className="py-5">
                        <button className="btn btn-block btn-active btn-accent">Update Now</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
