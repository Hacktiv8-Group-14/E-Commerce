import AdminContainer from "../../../components/container/adminContainer";
import CardSales from "../../../components/molecules/Admin/CardSales";
import Breadcrumb from "../../../components/molecules/Breadcrumb";
import { FaChartLine } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Graphic from "../../../components/molecules/Admin/Graphic";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const products = useSelector((state) => state.products.products);
  const admin = useSelector((state) => state.login.admin);

  const [totalSold, setTotalSold] = useState(0);
  const [productSold, setProductSold] = useState(0);

  useEffect(() => {
    const productsSold = () => {
      let temp = 0;
      products.forEach((product) => {
        temp += product.productSold;
      });
      setProductSold(temp);
    };
    productsSold();
  }, []);

  useEffect(() => {
    const productsSold = () => {
      let temp = 0;
      products.forEach((product) => {
        temp += product.productSold;
      });
      setProductSold(temp);
    };
    const setTotal = () => {
      let temp = 0;
      products.forEach((product) => {
        temp += product.productSold * product.price;
      });
      setTotalSold(temp);
    };
    setTotal();
    productsSold();
  }, []);

  if (admin) {
    return (
      <>
        <AdminContainer>
          <Breadcrumb list={[{ url: "/Dashboard", name: "Admin" }]} />
          <div className="flex md:flex-row justify-between flex-col">
            <CardSales
              className="sm:w-96"
              title="Product Sold"
              rating="55%"
              total={`${productSold} Product Sold`}
              icon={<FaChartLine color="white" size={30} />}
            />
            <CardSales
              className="sm:w-96"
              title="Sales"
              rating="55%"
              total={`$ ${totalSold}`}
              icon={<FaChartLine color="white" size={30} />}
            />
          </div>
          <Graphic />
        </AdminContainer>
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
}
