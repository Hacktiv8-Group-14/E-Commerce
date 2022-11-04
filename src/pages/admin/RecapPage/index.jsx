import BottomBarContainer from "../../../components/container/BottomBarContainer";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Breadcrumb from "../../../components/molecules/Breadcrumb";
import AdminContainer from "../../../components/container/adminContainer";
import CardProduct from "../../../components/molecules/Admin/CardProduct";

export default function RecapPage() {
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
    <AdminContainer>
      <Breadcrumb
        list={[
          { url: "/Dashboard", name: "Admin" },
          { url: "/sales", name: "Sales Recap" },
        ]}
      />
      <div></div>
      {products?.map((item, index) => (
        <CardProduct
          index={index}
          image={item.image}
          title={item.title}
          price={item.price}
          productSold={item.productSold}
        />
      ))}
      <BottomBarContainer>
        <div className="flex justify-center items-center bg-[#242582] w-4/5 p-2 sm:p-4 rounded-t-lg">
          <div className="text-xl sm:text-2xl">
            Total sales: <b>US$ {totalSold}</b>
          </div>
        </div>
      </BottomBarContainer>
    </AdminContainer>
  );
}
