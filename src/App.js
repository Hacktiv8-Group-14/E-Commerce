import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepages';
import Navbar from './components/molecules/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Homepage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
