import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CategoryNav from "../../../components/molecules/CategoryNav";
import ProductCard from "../../../components/molecules/ProductCard";
import PageContainer from "../../../components/container/PageContainer";
import CardContainer from "../../../components/container/CardContainer";
import { Navigate } from "react-router-dom";
import Poster from "./Parts/Poster/Poster";
import Recomended from "./Parts/Recomended";

export default function Homepage() {
  const categories = useSelector((state) => state.products.categories);
  const products = useSelector((state) => state.products.products);
  const admin = useSelector((state) => state.login.admin);

  const [category, setCategory] = useState("all category");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (category === "all category") {
      setFilteredProducts(products);
    } else {
      let filter = products.filter((product) => product.category === category);
      setFilteredProducts(filter);
    }
  }, [category, products]);

  if (admin) {
    return <Navigate to="/Dashboard" />;
  } else {
    return (
      <PageContainer>
        <Poster />

        <CategoryNav
          categories={categories}
          category={category}
          setCategory={setCategory}
        />
        <CardContainer>
          {filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CardContainer>
        <Recomended />
      </PageContainer>
    );
  }
}
