import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
export default function Root() {
  return (
    <div >
      <div className="container m-auto px-4">
        <div className="h-20">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>

    </div>
  )
}
