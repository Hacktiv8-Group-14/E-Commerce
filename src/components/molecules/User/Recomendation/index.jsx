import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import CardContainer from "../../../container/CardContainer";
import Header from "../Header/index.";

export default function Recomendation(props) {
  const { id } = useParams();
  const { category } = props;
  const products = useSelector((state) => state.products.products);
  const [filter, setFilter] = useState(products);

  useEffect(() => {
    let filterByCategory = products.filter(
      (product) => product.category === category && product.id !== Number(id)
    );
    setFilter(filterByCategory);
  }, [id]);

  return (
    <>
      <Header>Related Products</Header>
      <CardContainer>
        {filter.map((items, index) => (
          <ProductCard key={index} product={items} />
        ))}
      </CardContainer>
    </>
  );
}
