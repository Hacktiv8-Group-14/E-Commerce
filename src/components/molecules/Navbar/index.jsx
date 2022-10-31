import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../atoms/Logo";
import Buttton from "../../atoms/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { removeLogin } from "../../../features/loginSlice";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const dispatch = useDispatch()

  const user = useSelector(state => state.login.user)

  return (
    <nav className="w-full font-bold text-white bg-[#242582] p-2 sm:p-4 flex justify-between flex-col sm:flex-row fixed z-10 top-0">
      <div className="flex flex-row justify-between mb-2 sm:mb-0">
        {/* Nav Brand(?)/Header */}
        <Logo />

        {/* Button for Expanding Nav Link when Small Screen */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <AiOutlineMenu />
        </button>
      </div>

      {/* Navlink */}
      <div
        className={`text-lg sm:text-xl flex-col sm:flex-row sm:items-center ${
          isNavExpanded ? "flex" : "hidden sm:flex"
        }`}
      >
        {/* User Navlink */}
        <Link
          to="/Save"
          className="hover:text-[#F64C72] transition"
          onClick={() => setIsNavExpanded(false)}
        >
          Save
        </Link>
        <Link
          to="/Cart"
          className="mx-0 sm:mx-16 my-3 sm:my-0 hover:text-[#F64C72] transition"
          onClick={() => setIsNavExpanded(false)}
        >
          Cart
        </Link>

        {/* Admin Navlink */}
        {/* <Link to="/" onClick={() => setIsNavExpanded(false)}>Home</Link>
        <Link to="/sales" className="mx-0 sm:mx-16 my-4 sm:my-0" onClick={() => setIsNavExpanded(false)}>Sales Recap</Link> */}

        {/* Login/Logout Button */}
        {!user ? (
          <Link to="/login">
            <Buttton className="border-[#F64C72] hover:border-white border-2 rounded-lg px-5 py-1 text-base sm:text-lg text-[#F64C72] hover:text-white transition">
              Login
            </Buttton>
          </Link>
        ) : (
          <Buttton
            className="border-[#F64C72] hover:border-white border-2 rounded-lg px-5 py-1 text-base sm:text-lg text-[#F64C72] hover:text-white transition"
            onClick={() => {
              dispatch(removeLogin())
            }}
          >
            Logout
          </Buttton>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
