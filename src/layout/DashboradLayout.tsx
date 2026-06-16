import { Outlet } from "react-router-dom"
import { Footer, Header } from "../componet"
import Sidebar from "../componet/static/Sidebar"

const DashboradLayout = () => {
  return (
    <div>
        <Header/>
        <div className=" flex">

          <div className="hidden lg:block">
            <Sidebar/>
          </div>



          <div>
            <Outlet/>
          </div>



        </div>
        
        
        <Footer/>
    </div>
  )
}

export default DashboradLayout