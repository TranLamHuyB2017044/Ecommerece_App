import { Button, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import styles from "./Header.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Logout } from "../../redux/userRedux";
import localStorage from "redux-persist/es/storage";
import { useState } from "react";
function Header() {
  const quantity = useSelector((state) => state.cart.quantity);
  const username = useSelector((state) => state.user.currentUser);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.products);
  console.log(cartItems);
  const name = username?.data.others.firstname;
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("persist:root");
    Logout();
    navigate("/login");
    window.location.reload();
  };
  return (
    <div className={styles.header_container}>
      <div className={styles.header_left}>
        <span className={styles.language}>EN</span>
        <div className={styles.Search}>
          <input placeholder="Find something..." />
          <SearchIcon />
        </div>
      </div>
      <div className={styles.header_center}>CAMILE.</div>
      <div className={styles.header_right}>
        {username ? (
          <div
            onMouseLeave={() => setShowDropdown(false)}
            onMouseOver={() => setShowDropdown(true)}
            className={styles.dropdown}
          >
            <p className={styles.name}>{name}</p>
            {showDropdown && (
              <ul className={styles.menu}>
                <li className={styles.menu_item}>My Profiile</li>
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
                <ShoppingCartOutlinedIcon />
              </div>
              {cartItems.length > 0 ? (
                <div className={styles.showCart}>
                  {showCart &&
                    cartItems
                      .slice(-5)
                      .reverse()
                      .map((item, index) => (
                        <ul key={index} className={styles.cart_menu}>
                          <li className={styles.cart_item}>
                            <img
                              width="50px"
                              height="50px"
                              className={styles.item_img}
                              src={item.img}
                              alt={item.img}
                            />
                          </li>
                          <li className={styles.cart_item}>
                            <p className={styles.item_name}>{item.title}</p>
                          </li>
                          <li className={styles.cart_item}>
                            <p className={styles.item_price}>{item.price} $</p>
                          </li>
                        </ul>
                      ))}
                  <div className={styles.showbuttons}>
                    {showCart && (
                      <Link to="/cart">
                        <button className={styles.view_cart}>View Cart</button>
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
