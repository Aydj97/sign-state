import { Outlet } from "react-router-dom"
import { Footer, Header } from "../componet"

const DashboradLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default DashboradLayout