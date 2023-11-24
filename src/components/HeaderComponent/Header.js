import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import styles from "./Header.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Logout } from "../../redux/userRedux";
import localStorage from "redux-persist/es/storage";
import {  useState, useRef } from "react";
import NavBar from "../NavBarComponent/NavBar";

function Header() {
  
  const userInfo = useSelector((state) => state.user.currentUser);
  const Cart = useSelector((state) => state.cart)
  const cartProducts = Cart?.products
  const quantity = Cart?.quantity
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [productsSearch, setProductsSearch] = useState('');
  const name = userInfo?.data?.others.username;
  const avatarUser = userInfo?.data?.others.avatar
  const refInput = useRef()
  const navigate = useNavigate();
  const handleLogout = async () => {
    navigate("/login");
    Logout();
    window.location.reload()
    await localStorage.removeItem("persist:root");
    await localStorage.removeItem("access_token");
  };
  const handleChange = () => {
      if(refInput.current.value !== ''){
        navigate(`/search/?search=${productsSearch}`)
        refInput.current.focus()
        refInput.current.value =''
      }
      
  }


  const handleEnterChange = (e) => {
    if(e.key === "Enter") {
        handleChange()
    }
    
  }



  return (
    <div className={styles.header_container}>
      <div className={styles.header_left}>
        <span className={styles.language}>EN</span>
        <div className={styles.Search}>
          <input 
            ref={refInput}
            placeholder="Find something..." 
            onChange={() => setProductsSearch(refInput.current.value)}
            onKeyDown={handleEnterChange}
            />
          <SearchIcon  onClick ={handleChange}/>
        </div>
      </div>
      <div className={styles.header_center}>
        <p>CAMILE.</p>
        <div className={styles.nav}>
          <NavBar/>
        </div>
      </div>
      <div className={styles.header_right}>
        {userInfo ? (
          <div
            className={styles.dropdown}
          >
            <p className={styles.name}>{name}</p>
            <img 
              src={avatarUser} 
              alt="avatar_User"
              // onMouseLeave={() => setShowDropdown(false)}
              // onMouseOver={() => setShowDropdown(true)}
              onClick={()=> setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <ul className={styles.menu}>
                <Link style={{textDecoration: 'none', color: '#000'}} to='/profile'><li className={styles.menu_item}>My Profile</li></Link>
                <Link style={{textDecoration: 'none', color: '#000'}} to='/user/purchase'><li className={styles.menu_item}>My Purchase</li></Link>
                <li className={styles.menu_item} onClick={handleLogout}>
                  Logout
                </li>
              </ul>
            )}
          </div>
        ) : (
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            <p className={styles.login}>Sign In</p>
          </Link>
        )}

        <IconButton aria-label="cart">
          <Badge badgeContent={quantity} color="secondary">
            <div
              className={styles.cart_dropdown}
              onMouseLeave={() => setShowCart(false)}
              onMouseOver={() => setShowCart(true)}
            >
              <div>
                <Link to='/cart' ><ShoppingCartOutlinedIcon /></Link>
              </div>
              {quantity > 0 ? (
                <div className={styles.showCart}>
                  {showCart &&
                    cartProducts
                      .slice(-5)
                      .map((item, index) => (
                        <ul key={index} className={styles.cart_menu}>
                          <li className={styles.cart_item}>
                            <img
                              width="50px"
                              height="50px"
                              className={styles.item_img}
                              src={item.productId.img[3].url_img}
                              alt={item.productId.title}
                            />
                          </li>
                          <li className={styles.cart_item}>
                            <p className={styles.item_name}>{item.productId.title}</p>
                          </li>
                          <li className={styles.cart_item}>
                            <p className={styles.item_price}>{item.productId.price}$</p>
                          </li>
                        </ul>
                      )).reverse()}
                  <div className={styles.showbuttons}>
                    {showCart && (
                      <Link to="/cart" style={{color: '#000'}}>
                        <p className={styles.view_cart}>View Cart</p>
                      </Link>
                    )}
                  </div>
                </div>
              ) : (
                <div className={styles.showCart}>
                  {showCart && (
                    <div className={styles.cart_menu_empty}>
                        <img width='120px' src='https://png.pngtree.com/png-clipart/20221223/ourmid/pngtree-shoping-clipart-image-download-vector-art-png-image_6534634.png' alt="src" />
                        <p>Not Products Yet</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Badge>
        </IconButton>
      </div>
    </div>
    
  );
}

export default Header;
