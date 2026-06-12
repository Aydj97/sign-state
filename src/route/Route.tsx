import { createBrowserRouter } from "react-router-dom";
import SigninLayout from "../layout/SigninLayout";
import Login from "../pages/home/Login";
import DashboradLayout from "../layout/DashboradLayout";
import Dashborad from "../pages/dashborad/Dashboard";

export const element = createBrowserRouter([
    {  path: "/",
    element: < SigninLayout/>,
    children: [
      {
        index: true,
        element: < Login />,
      },
    ],

},

{  path: "/dashboard",
    element: < DashboradLayout/>,
    children: [
      {
        index: true,
        element: < Dashborad />,
      },
    ],

}



])