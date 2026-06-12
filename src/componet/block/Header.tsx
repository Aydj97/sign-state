import { useDispatch } from "react-redux"
import { logout } from "../../global/reduxSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())

        toast.success("Logout successful")
        navigate("/")
    }

  return (
    <div className="w-full h-17.5 shadow-2xl flex items-center px-2 justify-between">
      Header

      <button className="p-2 px-4 bg-[#000000] text-[#ffffff] font-bold rounded cursor-pointer" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Header