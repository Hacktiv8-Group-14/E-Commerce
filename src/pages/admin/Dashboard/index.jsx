import AdminContainer from "../../../components/container/adminContainer";
import CardSales from "../../../components/molecules/Admin/CardSales";
import Breadcrumb from "../../../components/molecules/Breadcrumb";
import { FaRegChartBar } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Graphic from "../../../components/molecules/Admin/Graphic";
import { Navigate } from "react-router-dom";

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
            <div className="w-full md:w-1/4 px-2 border rounded-lg">
              <div className="text-center py-4">Most sales</div>
              {productSold ? (
                <>
                  {products
                    ?.filter((item) => item.productSold >= 1)
                    .sort((a, b) => b.productSold - a.productSold)
                    .slice(0, 7)
                    .map((product) => (
                      <div className="flex justify-between border rounded-lg p-2 my-2">
                        <div className="truncate w-1/2">{product.title}</div>
                        <div>{`${product.productSold} item sold`}</div>
                      </div>
                    ))}
                </>
              ) : (
                <div className="text-center text-red-600">"No sales yet"</div>
              )}
            </div>
          </div>
        </AdminContainer>
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
}
