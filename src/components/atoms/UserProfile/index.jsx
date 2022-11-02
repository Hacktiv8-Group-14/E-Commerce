import Button from "../Buttons";
import { useDispatch, useSelector } from "react-redux";
import { removeLogin } from "../../../features/loginSlice";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import Swal from "sweetalert2";

export default function UserProfile() {
  const userName = useSelector((state) => state.login.userName);
  const admin = useSelector((state) => state.login.admin);
  const dispatch = useDispatch();
  const [logout, setLogout] = useState();

  const buttonUser = () => {
    setLogout(!logout);
  };

  const Logout = () => {
    Swal.fire({
      title: "Are you sure Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeLogin());
        Swal.fire("Succes Logout", "success");
      }
    });
  };

  return (
    <div className="mr-6">
      <Button onClick={buttonUser} className="">
        <div className="flex items-center">
          <div className="bg-black p-1 px-4 rounded-full mr-3">
            {admin ? "A" : userName.charAt(0).toUpperCase()}
          </div>
          <div className="">{admin ? "Admin" : userName}</div>
        </div>
      </Button>

      {logout && (
        <div>
          <Button
            className="absolute bg-black text mr-12 p-2 mt-2 text-base px-4 rounded-lg "
            onClick={Logout}
          >
            <div className="flex items-center">
              <div className="mr-3">Logout</div>
              <FiLogOut />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}
