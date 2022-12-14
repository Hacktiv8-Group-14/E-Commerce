import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import Logo from "../../../atoms/Logo";
import Button from "../../../atoms/Buttons";
import UserProfile from "../../../atoms/UserProfile";

function Navbar() {
  const admin = useSelector((state) => state.login.admin);
  const userName = useSelector((state) => state.login.userName);
  const cart = useSelector((state) => state.cart.items[userName]);
  const user = useSelector((state) => state.login.user);
  const savedProduct = useSelector(
    (state) => state.saved.savedProducts[userName]
  );

  return (
    <nav className="w-full font-bold text-white bg-white flex justify-between items-center fixed z-10 top-0  border-b-2 px-2 sm:px-10">
      <Logo />

      {/* Navlink */}
      <div className="flex items-center py-4 text-black ">
        <>
          <div className="flex">
            {/* User Navlink */}
            {user ? (
              <div className="flex border-r-2 border-gray-300 mr-5">
                <div className="relative">
                  {savedProduct?.length ? (
                    <div className="absolute rounded-full -right-1 -top-1 block text-small text-white bg-red-600 px-1">
                      {savedProduct?.length}
                    </div>
                  ) : (
                    <></>
                  )}
                  <Link to="/Save" className=" transition">
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
                      className="hover:text-bluedark text-black"
                    />
                  </Link>
                </div>
              </div>
            ) : (
              <></>
            )}

            {/* Login/Logout Button */}
            {!user && !admin ? (
              <Link to="/login">
                <Button className="border-bluedark text-bluedark border-2 rounded-lg px-5 py-1 text-base sm:text-lg  transition">
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
