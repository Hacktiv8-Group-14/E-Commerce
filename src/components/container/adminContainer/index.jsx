import SideBar from "../../molecules/SideBar";
import { HiOutlineMenu } from "react-icons/hi";

export default function AdminContainer({ children }) {
  return (
    <>
      <HiOutlineMenu className="" />
      <SideBar className="hidden md:flex" />
      <div className="block lg:ml-80 lg:mr-10 mx-auto">{children}</div>
    </>
  );
}
