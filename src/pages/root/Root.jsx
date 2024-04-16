import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <div >
      <div className="container m-auto px-4">
        <Outlet></Outlet>
      </div>

    </div>
  )
}
