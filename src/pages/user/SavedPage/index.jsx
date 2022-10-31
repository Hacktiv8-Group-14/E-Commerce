import { useSelector } from "react-redux";
import CardContainer from "../../../components/container/CardContainer";
import PageContainer from "../../../components/container/PageContainer";
import ProductCard from "../../../components/molecules/ProductCard";

export default function SavedPage() {
  const savedProduct = useSelector((state) => state.saved.savedProducts);
  const products = useSelector((state) => state.products.products);

  let product = {};

  return (
    <>
      <PageContainer>
        <CardContainer>
          {savedProduct?.map((id) => {
            product = products?.find((i) => i.id === id);
            return <ProductCard key={product?.id} product={product} />;
          })}
        </CardContainer>
      </PageContainer>
    </>
  );
}
