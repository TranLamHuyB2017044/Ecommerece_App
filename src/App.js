import { BrowserRouter, Routes, Route, Navigate, Outlet, } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/CartPage/Cart";
import ProductList from "./pages/ProductPage/ProductList";
import DetailProduct from './pages/DetailProductPage/DetailProduct'
import Register from "./pages/AuthPage/Register";
import SignIn from "./pages/AuthPage/SignIn";
import { useSelector } from "react-redux";
import Search from "./pages/SearchPage/Search";
import Profile from "./pages/UserProfilePage/Profile";
import EditProfile from "./pages/EditProfilePage/EditProfile";
import Test from "./pages/Test";
function App() {
  const user = useSelector(state => state.user.currentUser)
  const ProtectedRoute = () => {
    if (user) {
      return <Navigate to='/' replace />;
    }
  
    return <Outlet />;
  };
  const ProtectUser = () => {
    if(user === null){
      return <Navigate to='/login' replace />;
    }
    return <Outlet />;
  }
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
        <Route element={<ProtectUser/>} >
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profile/edit/:id" element={<EditProfile/>}/>
        </Route>
        <Route path="/3d" element={<Test/>} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
