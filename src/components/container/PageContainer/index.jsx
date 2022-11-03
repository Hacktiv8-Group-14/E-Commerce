import Footer from "../../molecules/Footer";
import Navbar from "../../molecules/Navbar";

export default function PageContainer({ children }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto mt-16 sm:mt-20 w-11/12 flex flex-col">
        {children}
      </div>
      <Footer />
    </>
  );
}
