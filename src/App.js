import ProductsList from "./components/ProductsList/ProductsList";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (
   <Router>
    <Header />
    <Routes>
    <Route path='/' element={<ProductsList />} />
     <Route path='/cart' element={<Cart />} />
     </Routes>
     </Router>
  
  );
}

export default App;
