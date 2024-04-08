import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
export default function Root() {
  return (
    <div >
      <div className="border-2 fixed top-0 w-full z-10">
        <Navbar></Navbar>
      </div>
      <div className="container m-auto p-4 mt-14">
        <Outlet></Outlet>
      </div>

    </div>
  )
}
