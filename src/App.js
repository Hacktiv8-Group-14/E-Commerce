import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Routing";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { fetchProducts } from "./features/productSlice";
import ScrollToTop from "./components/atoms/ScrollToTop";

function App() {
  const dispatch = useDispatch();
  const isPending = useSelector((state) => state.products.isPending);
  const products = useSelector((state) => state.products.products)

  useEffect(() => {
    if(products.length === 0){
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  return (
    <BrowserRouter>
      {isPending ? (
        <div className="h-screen w-screen flex flex-col justify-center items-center gap-4">
          <ReactLoading type="spin" color="#242582" height={100} width={100} />
          <div className="text-2xl">Loading...</div>
        </div>
      ) : (
        <>
          <ScrollToTop />
          <Routes>
            {routes?.map((item, index) => (
              <Route key={index} path={item.path} element={<item.element />} />
            ))}
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
