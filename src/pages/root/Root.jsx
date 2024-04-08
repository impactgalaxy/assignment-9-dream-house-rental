import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
export default function Root() {
  return (
    <div className="container m-auto p-4">
      <div className="min-h-16 w-full">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  )
}
