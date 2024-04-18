import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
export default function Root() {
  return (
    <div >
      <div className="container m-auto px-4">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>

    </div>
  )
}
