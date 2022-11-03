import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import Logo from "../../atoms/Logo";
import Button from "../../atoms/Buttons";
import { useSelector, useDispatch } from "react-redux";
import UserProfile from "../../atoms/UserProfile";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const admin = useSelector((state) => state.login.admin);
  const userName = useSelector((state) => state.login.userName);
  const cart = useSelector((state) => state.cart.items).find(
    (item) => item.username === userName
  )?.cartItems;
  const user = useSelector((state) => state.login.user);
  const savedProduct = useSelector((state) => state.saved.savedProducts);

  return (
    <nav className="w-full font-bold text-white bg-white flex justify-between items-center fixed z-10 top-0  border-b-2 px-2 sm:px-10">
      <Logo />

      {/* Navlink */}
      <div className="flex items-center py-4 text-black ">
        <>
          <div className="flex">
            {/* User Navlink */}
            {user ? (
              <>
                <div className="relative">
                  {savedProduct ? (
                    <div className="absolute rounded-full -right-1 -top-1 block text-small text-white bg-red-600 px-1">
                      {savedProduct.length}
                    </div>
                  ) : (
                    <></>
                  )}
                  <Link to="/Save" className="hover:text-[#F64C72] transition">
                    <AiOutlineHeart
                      size={30}
                      className="hover:text-[#242582] text-black"
                    />
                  </Link>
                </div>

                <div className="relative mx-4">
                  {cart ? (
                    <div className="absolute rounded-full -right-1 -top-1 block text-small text-white bg-red-600 px-1">
                      {cart.length}
                    </div>
                  ) : (
                    <></>
                  )}
                  <Link to="/cart">
                    <AiOutlineShoppingCart
                      size={30}
                      className="hover:text-[#242582] text-black"
                    />
                  </Link>
                </div>
              </>
            ) : (
              <></>
            )}

            {/* Login/Logout Button */}
            {!user && !admin ? (
              <Link to="/login">
                <Button className="border-[#242582] text-[#242582] border-2 rounded-lg px-5 py-1 text-base sm:text-lg  transition">
                  Login
                </Button>
              </Link>
            ) : (
              <UserProfile />
            )}
          </div>
        </>
      </div>
    </nav>
  );
}
export default Navbar;
