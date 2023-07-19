import { BrowserRouter, Routes, Route, Navigate, Outlet, } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/CartPage/Cart";
import ProductList from "./pages/ProductPage/ProductList";
import DetailProduct from './pages/DetailProductPage/DetailProduct'
import Register from "./pages/AuthPage/Register";
import SignIn from "./pages/AuthPage/SignIn";
import { useSelector } from "react-redux";
import Search from "./pages/SearchPage/Search";
function App() {
  const user = useSelector(state => state.user.currentUser)
  const ProtectedRoute = () => {
    if (user) {
      return <Navigate to='/' replace />;
    }
  
    return <Outlet />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
