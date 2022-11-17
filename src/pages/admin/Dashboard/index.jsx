import AdminContainer from "../../../components/container/adminContainer";
import Breadcrumb from "../../../components/molecules/Breadcrumb";
import CardSales from "./Parts/CardSales";
import Graphic from "./Parts/Graphic";
import { FaRegChartBar } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import MostSales from "./Parts/MostSales";

export default function Dashboard() {
  const products = useSelector((state) => state.products.products);
  const admin = useSelector((state) => state.login.admin);

  const [totalSold, setTotalSold] = useState(0);
  const [productSold, setProductSold] = useState(0);

  const formatDollar = (num) => {
    var p = num.toFixed(2).split(".");
    return (
      p[0]
        .split("")
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num + (num !== "-" && i && !(i % 3) ? "," : "") + acc;
        }, "") +
      "." +
      p[1]
    );
  };

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
          <Breadcrumb list={[{ url: "/Dashboard", name: "Dashboard" }]} />
          <div className="flex md:flex-row justify-between flex-col">
            <CardSales
              title="Total Product Sold"
              total={`${productSold} Product Sold`}
              icon={<FaRegChartBar color="white" size={30} />}
            />
            <CardSales
              title="Financial Income"
              total={`$ ${formatDollar(totalSold)}`}
              icon={<MdAttachMoney color="white" size={30} />}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-5">
            <Graphic />
            <MostSales productSold={productSold} />
          </div>
        </AdminContainer>
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
}
