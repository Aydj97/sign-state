import { Outlet } from "react-router-dom"
import { Footer,  } from "../componet"

const SigninLayout = () => {
  return (
    <div>
        {/* <Header/> */}
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SigninLayout