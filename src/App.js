import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/molecules/Navbar";
import { routes } from "./Routing";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { fetchProducts } from './features/productSlice';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes?.map((item, index) => (
          <Route key={index} path={item.path} element={<item.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
