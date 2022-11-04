import AdminContainer from "../../../components/container/adminContainer";
import CardSales from "../../../components/molecules/Admin/CardSales";
import Breadcrumb from "../../../components/molecules/Breadcrumb";
import { FaChartLine } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const products = useSelector((state) => state.products.products);
  const admin = useSelector((state) => state.login.admin)

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

  if(admin) {
    return (
      <>
        <AdminContainer>
          <Breadcrumb
            list={[
              { url: "/Dashboard", name: "Admin" },
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
    )
  } else{
    return <Navigate to="/" />
  }
}
