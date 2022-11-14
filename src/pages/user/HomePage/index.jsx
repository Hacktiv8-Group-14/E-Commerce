import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CategoryNav from "./Parts/CategoryNav";
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
  const [selects, setSelects] = useState("");
  const items = [...filteredProducts];

  useEffect(() => {
    if (category === "all category") {
      setFilteredProducts(products);
    } else {
      let filter = products?.filter((product) => product.category === category);
      setFilteredProducts(filter);
    }
  }, [category, products]);

  useEffect(() => {
    if (selects === "low to high") {
      let lowPrice = items?.sort((a, b) => a.price - b.price);
      setFilteredProducts(lowPrice);
    } else if (selects === "high to low") {
      let highPrice = items?.sort((a, b) => b.price - a.price);
      setFilteredProducts(highPrice);
    } else {
      // sort by default (id)
      let sortById = items?.sort((a, b) => a.id - b.id)
      setFilteredProducts(sortById)
    }
  }, [selects]);

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
          selects={selects}
          setSelects={setSelects}
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
