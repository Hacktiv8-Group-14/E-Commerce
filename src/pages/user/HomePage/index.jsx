import Header from "../../../components/molecules/Header/index.";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CategoryNav from "../../../components/molecules/CategoryNav";
import ProductCard from "../../../components/molecules/ProductCard";
import PageContainer from "../../../components/container/PageContainer";
import CardContainer from "../../../components/container/CardContainer";

export default function Homepage() {
  const categories = useSelector((state) => state.products.categories);
  const products = useSelector((state) => state.products.products);

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

  return (
    <PageContainer>
      <Header>Products</Header>
      <CategoryNav
        categories={categories}
        category={category}
        setCategory={setCategory}
      />
      <CardContainer>
        {filteredProducts?.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            category={product.category}
            title={product.title}
            price={product.price}
            rating={product.rating.rate}
            id={product.id}
            productSold={product.productSold}
            stock={product.stock}
          />
        ))}
      </CardContainer>
    </PageContainer>
  );
}
