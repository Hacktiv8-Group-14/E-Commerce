import AdminContainer from "../../../components/container/adminContainer";
import CardSales from "../../../components/molecules/Admin/CardSales";
import Breadcrumb from "../../../components/molecules/Breadcrumb";
import { FaChartLine } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const products = useSelector((state) => state.products.products);

  const [totalSold, setTotalSold] = useState(0);

  useEffect(() => {
    const setTotal = () => {
      let temp = 0;
      products.forEach((product) => {
        temp += product.productSold * product.price;
      });
      setTotalSold(temp);
    };
    setTotal();
  }, []);

  return (
    <>
      <AdminContainer>
        <Breadcrumb
          list={[
            { url: "/", name: "Admin" },
            { url: "/Dashboard", name: "Dashboard" },
          ]}
        />
        <div className="flex md:flex-row flex-col">
          <CardSales
            title="Sales"
            rating="55%"
            total="2"
            icon={<FaChartLine color="white" size={30} />}
          />
          <CardSales
            title="Money"
            rating="55%"
            total={`$ ${totalSold}`}
            icon={<FaChartLine color="white" size={30} />}
          />
        </div>
      </AdminContainer>
    </>
  );
}
