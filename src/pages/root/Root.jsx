import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <div className="container m-auto p-4">
      <Outlet></Outlet>
    </div>
  )
}
