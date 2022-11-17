import Footer from "../../molecules/User/Footer";
import Navbar from "../../molecules/User/Navbar";

export default function PageContainer({ children }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto mt-16 sm:mt-20 w-11/12 flex flex-col ">
        {children}
      </div>
      <Footer />
    </>
  );
}
