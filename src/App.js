import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/molecules/Navbar";
import { routes } from "./Routing";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes?.map((item) => {
          <Route path={item.path} element={<item.element />}></Route>;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
