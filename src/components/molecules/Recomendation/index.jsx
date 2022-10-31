import Header from "../Header/index.";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import CardContainer from "../../container/CardContainer";
import { useEffect, useState } from "react";

export default function Recomendation(props) {
  const { category } = props;
  const products = useSelector((state) => state.products.products);
  const [filter, setFilter] = useState(products);

  useEffect(() => {
    let filterByCategory = products.filter(
      (product) => product.category === category
    );
    setFilter(filterByCategory);
  }, []);

  return (
    <>
      <Header>Related Products</Header>
      <CardContainer>
        {filter.map((items) => (
          <ProductCard product={items} />
        ))}
      </CardContainer>
    </>
  );
}
