import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/ProductPage/ProductList";
import DetailProduct from './pages/DetailProductPage/DetailProduct'
import Register from "./pages/AuthPage/Register";
import SignIn from "./pages/AuthPage/SignIn";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Cart />} />
        <Route path="/Detail" element={<DetailProduct />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
