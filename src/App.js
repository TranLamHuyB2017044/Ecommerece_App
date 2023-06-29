import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/HeaderComponent/Header";

import Announcement from "./components/AnnouncementComponent/Announcement";
function App() {
  return (
    <BrowserRouter>
      <Announcement/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
