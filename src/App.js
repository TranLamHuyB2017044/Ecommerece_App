import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/CartPage/Cart";
import ProductList from "./pages/ProductPage/ProductList";
import DetailProduct from './pages/DetailProductPage/DetailProduct'
import Register from "./pages/AuthPage/Register";
import SignIn from "./pages/AuthPage/SignIn";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/detail" element={<DetailProduct />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
