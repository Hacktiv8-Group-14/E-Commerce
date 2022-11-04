import Breadcrumb from "../../../components/molecules/Breadcrumb";
import AdminContainer from "../../../components/container/adminContainer";
import CardProduct from "../../../components/molecules/Admin/CardProduct";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function StockUpdate() {

  const products = useSelector((state) => state.products.products)
  const admin = useSelector((state) => state.login.admin)

  if(admin) {
    return (
      <>
        <AdminContainer>
          <Breadcrumb
            list={[
              { url: "/Dashboard", name: "Admin" },
              { url: "/Stock-update", name: "Stock Update" },
            ]}
          />
          {products.map((item, index) => (
            <CardProduct
              key={index} 
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              stock={item.stock}
              updButton={true}
            />
          ))}
        </AdminContainer>
      </>
    );
  } else{
    return <Navigate to="/" />
  }
}
