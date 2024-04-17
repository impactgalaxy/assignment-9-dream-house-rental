import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../contextProvider/ContextProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


export default function RentOrSaleConfirm() {
    const { toast } = useContext(AuthContext);

    const navi = useNavigate();
    const {
        register,
        handleSubmit,

    } = useForm();
    const onSubmit = () => {
        navi("/");
        toast.success("Congratulations! your house confirm for rent");
    }
    return (
        <div>
            <Helmet>
                <title>Confirm Box</title>
            </Helmet>
            <div className="text-center p-4 lg:p-10">
                <h1 className="text-3xl">Welcome to confirm your product</h1>

            </div>
            <div className="lg:w-1/2 m-auto p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Your name?</span>
                        </div>
                        <input type="text" {...register("name", {
                            required: true
                        })} placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Your address?</span>
                        </div>
                        <input type="text" {...register("address", {
                            required: true
                        })} placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Your number?</span>
                        </div>
                        <input type="text" {...register("number", {
                            required: true
                        })} placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                    <input type="submit" className="btn btn-block my-4" />
                </form>
            </div>
        </div>
    )
}
