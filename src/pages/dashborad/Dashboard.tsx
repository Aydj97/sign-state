import { IoMdPerson } from "react-icons/io"

const Dashborad = () => {
  return (
    <div className="w-full font-bold text-black  flex  justify-center items-center">
        <div  className="bg-emerald-600 rounded-2xl w-[70%]  pb-10">
          <div className=" grid g-5" >
            <div className="text-9xl"><IoMdPerson /> <h1>Welcom Ayo!</h1> </div>
            <div className="grid gap-5"><h1 className="text-black bg-blue-900 flex gap-6 text-2xl">Name: <span>Ayo Deji</span> </h1>
            <h1 className="text-black bg-blue-900 flex gap-6 text-2xl">Email: <span>Ayodeji@gmail.com</span> </h1>
            <h1 className="text-black bg-blue-900 flex gap-6 text-2xl">address: <span>Ayo Deji</span> </h1>
            <h1 className="text-black bg-blue-900 flex gap-6 text-2xl">Age: <span>25</span> </h1>
            <h1 className="text-black bg-blue-900 flex gap-6 text-2xl">PhoneNo: <span>09028668831</span> </h1>
            <h1 className="text-black bg-blue-900 flex gap-6 text-2xl">Acc: <span>06777188</span> </h1>

            </div>
          </div>
        </div>

    </div>
  )
}

export default Dashborad