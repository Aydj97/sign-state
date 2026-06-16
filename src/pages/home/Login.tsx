import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../utils/api"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { login } from "../../global/reduxSlice"



const Login = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch ()

   // const dispatch = useDispatch()

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const [loading, setLoading] = useState(false)

   const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true)

      const data = await loginUser(
        email,password
      );

      dispatch(
        login({
          user: data.user,
          accessToken: data.accessToken,
        })
      )

      console.log("Dispatch data:",{
        user: data.user,
        accessToken: data.accessToken
      }
      )

      // dispatch(
            //     login({
            //         user: data.user,
            //         accessToken: data.accessToken
            //     })
            // )

            toast.success("Sign in successful")

            console.log("data", data)

            navigate("/dashboard")

        } catch (error: any) {
            console.error(error)

            toast.error("Login Failed")
        } finally {
            setLoading(false)
          
          }





    }
  
  return (
    <div className=" bg-amber-400 border-t flex justify-center  w-full h-screen text-white  ">
      <div className="  flex justify-center w-[90] items-center p-10">
        <div className=" grid gap-10  justify-center items-center w-[70%]">
          <div className="w-[90%] justify-center items-center grid gap-5 bg-blue-500 bg-cover bg-center h-110 shadow-2xl rounded-2xl ">
            <div >
              <h6 className="text-[32px] font-bold font-sans">Enter your info to sign in</h6>
              <span className=" text-[18px] text-[#ffffffb3] font-sans font-normal">Or get started with a new account.</span>
            </div>


             <form onSubmit={handlesubmit} className="w-[80%] md:w-[50%] lg:w-[30%] shadow-2xl runded-[15px] p-6 pt-10">

               <div className=" flex flex-col justify-center items-center">
              
                <div className="w-[89%]  gap-3 grid   justify-center items-center ">
                 
                  <input
                    type="text"
                    placeholder=" Email or mobile number"
                    className="border border-[#616161] bg-[#131212] p-2 lg:w-105 h-13 md:w-105 font-semibold   text-white rounded-[5px]"
                    value={email}
                    onChange={(e) => 
                        setEmail(e.target.value)
                    }
                    required
                  />

                  <input
                    type="password"
                    placeholder=" Password"
                    className="border border-[#616161] bg-[#131212] p-2 lg:w-105 h-13 md:w-105 font-semibold   text-white rounded-[5px]"
                    value={password}
                    onChange={(e) => 
                      setPassword(e.target.value)

                    }
                    required

                  />

                  
                    <button type="submit"
                    className=" flex gap-4 w-70 md:w-105 lg:w-105 h-13  bg-[#312705] justify-center items-center text-[#ffffff] font-bold font-sans lg:text-[17px] p-2 lg:p-0  rounded-sm"
                    disabled={loading}
                    >
                      Sign In
                    </button>
                    {
                      loading ? "Logging in" : "Login"
                    }
                 
                </div>
              
            </div>

                    
                  </form>

           
          </div>

          <div className="grid gap-10 justify-center items-center ">
                 
                 <p>Get Help <span></span> </p>

                <span className="text-[#ffffff80] w-76 lg:w-full md:w-full">This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Login