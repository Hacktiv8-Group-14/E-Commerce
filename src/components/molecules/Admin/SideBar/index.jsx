import Button from "../../../atoms/Buttons";
import Logo from "../../../atoms/Logo";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { removeLogin } from "../../../../features/loginSlice";
import { useDispatch } from "react-redux";
import { AiOutlineDashboard, AiOutlineClose } from "react-icons/ai";
import { MdSystemUpdateAlt } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaRegChartBar } from "react-icons/fa";

import Swal from "sweetalert2";

export default function SideBar({ className, setIsSideBarOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navActive = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#0a213a" : "",
      color: isActive ? "white" : "",
    };
  };

  const Logout = () => {
    Swal.fire({
      title: "Logout from this account?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeLogin());
        Swal.fire({
          title: "Sucessfully Logged out",
          icon: "success",
        });
        navigate("/");
      }
    });
  };

  return (
    <div className={className}>
      <div className="h-screen w-screen fixed top-0 z-10 bg-gray-600/50 md:hidden"></div>
      <div className="bg-white border fixed top-0 left-0 z-10 md:z-0 h-screen">
        <div className="mt-3 mb-5 flex justify-between items-center">
          <Logo />
          <Button className="p-3 md:hidden" onClick={setIsSideBarOpen}>
            <AiOutlineClose className="text-2xl text-bluedark" />
          </Button>
        </div>
        <div className=" justify flex flex-col w-72 h-full">
          <NavLink
            to="/Dashboard"
            className="border-t py-5 pl-4"
            style={navActive}
          >
            <div className="flex items-center">
              <AiOutlineDashboard size={25} />
              <div className="ml-4"> Dashboard</div>
            </div>
          </NavLink>
          <NavLink
            to="/Stock-update"
            className="border-t py-5 pl-4"
            style={navActive}
          >
            <div className="flex items-center">
              <MdSystemUpdateAlt size={25} />
              <div className="ml-4"> Stock Update</div>
            </div>
          </NavLink>
          <NavLink to="/Sales" className="border-y py-5 pl-4" style={navActive}>
            <div className="flex items-center">
              <FaRegChartBar size={25} />
              <div className="ml-4"> Sales Recap</div>
            </div>
          </NavLink>
          <Button
            onClick={Logout}
            className="border-y py-5 mt-24 hover:bg-bluedark hover:text-white transition"
          >
            <div className="flex items-center justify-center">
              <FiLogOut size={25} />
              <div className="ml-4">Logout</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
