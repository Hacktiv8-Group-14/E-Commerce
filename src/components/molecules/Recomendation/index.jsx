import Header from "../Header/index.";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import CardContainer from "../../container/CardContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Recomendation(props) {
  const { id } = useParams()
  const { category } = props;
  const products = useSelector((state) => state.products.products);
  const [filter, setFilter] = useState(products);

  useEffect(() => {
    let filterByCategory = products.filter(
      (product) => product.category === category && product.id !== Number(id)
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
