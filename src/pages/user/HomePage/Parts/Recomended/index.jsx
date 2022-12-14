import { useSelector } from "react-redux";
import CardContainer from "../../../../../components/container/CardContainer";
import ProductCard from "../../../../../components/molecules/User/ProductCard";
import Header from "../../../../../components/molecules/User/Header/index.";

export default function Recomended() {
  const products = useSelector((state) => state.products.products);
  const userName = useSelector((state) => state.login.userName);
  const product = [...products];
  const bestRating = product.sort((a, b) => b.rating.rate - a.rating.rate);

  return (
    <div className="mt-4">
      <Header>Recomended for {userName ? userName : "you"}</Header>
      <CardContainer>
        {bestRating.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardContainer>
    </div>
  );
}
