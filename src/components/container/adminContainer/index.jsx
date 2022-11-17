import SideBar from "../../molecules/Admin/SideBar";
import { HiOutlineMenu } from "react-icons/hi";
import Button from "../../atoms/Buttons";
import { useState } from "react";

export default function AdminContainer({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <>
      <Button className="p-2" onClick={() => setIsSideBarOpen(true)}>
        <HiOutlineMenu className="text-3xl text-bluedark md:hidden" />
      </Button>
      <SideBar
        className={`${isSideBarOpen ? "flex flex-col" : "hidden"} md:flex`}
        setIsSideBarOpen={() => setIsSideBarOpen(false)}
      />
      <div className="px-2 md:ml-80 md:mr-10 mx-auto">{children}</div>
    </>
  );
}
