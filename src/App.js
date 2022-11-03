import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Routing";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./features/productSlice";
import ScrollToTop from "./components/atoms/ScrollToTop";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {routes?.map((item, index) => (
          <Route key={index} path={item.path} element={<item.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
