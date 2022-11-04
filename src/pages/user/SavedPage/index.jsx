import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import CardContainer from "../../../components/container/CardContainer";
import PageContainer from "../../../components/container/PageContainer";
import ProductCard from "../../../components/molecules/ProductCard";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/molecules/Breadcrumb";

export default function SavedPage() {
  const savedProduct = useSelector((state) => state.saved.savedProducts);
  const products = useSelector((state) => state.products.products);
  const admin = useSelector((state) => state.login.admin);

  let product = {};

  if (admin) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        <PageContainer>
          <Breadcrumb
            list={[
              { url: "/", name: "Home" },
              { url: "/save", name: "Saved" },
            ]}
          />
          {savedProduct.length ? (
            <CardContainer>
              {savedProduct?.map((id) => {
                product = products?.find((i) => i.id === id);
                return <ProductCard key={product?.id} product={product} />;
              })}
            </CardContainer>
          ) : (
            <>
              <div className=" text-center py-20 ">
                <div className="text-xl">
                  It seem's you haven't saved any searches yet
                </div>
                <div className="mt-4">
                  <Link
                    to="/"
                    className="bg-[#242582] text-white p-2 rounded-lg"
                  >
                    Back To Home
                  </Link>
                </div>
              </div>
            </>
          )}
        </PageContainer>
      </>
    );
  }
}
