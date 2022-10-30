import { useSelector } from "react-redux";
import CardContainer from "../../../components/container/CardContainer";
import PageContainer from "../../../components/container/PageContainer";
import ProductCard from "../../../components/molecules/ProductCard";

export default function SavedPage() {
  const savedProduct = useSelector((state) => state.saved.savedProducts);

  return (
    <>
      <PageContainer>
        <CardContainer>
          {savedProduct?.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              category={item.category}
              title={item.title}
              price={item.price}
              rating={item.rating.rate}
              id={item.id}
              productSold={item.productSold}
              stock={item.stock}
            />
          ))}
        </CardContainer>
      </PageContainer>
    </>
  );
}
