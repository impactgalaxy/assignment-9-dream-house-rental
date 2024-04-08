import { TbError404 } from "react-icons/tb";
import { Link, useRouteError } from "react-router-dom";
export default function NotFound() {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="min-h-screen w-full absolute top-0 z-10 flex flex-col items-center justify-center gap-5">
            <TbError404 className="text-8xl font-bold"></TbError404>
            <p className="md:text-2xl">Oops sorry! Something went wrong</p>
            {err.statusText || err.message}
            <Link to="/" className="btn btn-outline btn-accent">Go Back</Link>


        </div>
    )
}
