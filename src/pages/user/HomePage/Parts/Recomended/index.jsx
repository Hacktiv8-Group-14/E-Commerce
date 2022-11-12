import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CardContainer from "../../../../../components/container/CardContainer";
import ProductCard from "../../../../../components/molecules/ProductCard";
import Header from "../../../../../components/molecules/Header/index.";

export default function Recomended() {
  const products = useSelector((state) => state.products.products);
  const userName = useSelector((state) => state.login.userName);
  const [highRating, setHightRating] = useState(products);

  useEffect(() => {
    const filter = () => {
      setHightRating(
        highRating.slice().sort((a, b) => b.rating.rate - a.rating.rate)
      );
    };
    filter();
  });

  return (
    <div className="mt-4">
      <Header>Recomended for {userName ? userName : "you"}</Header>
      <CardContainer>
        {highRating.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardContainer>
    </div>
  );
}
