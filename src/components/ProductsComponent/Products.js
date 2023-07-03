import { popularProducts } from "../../data";
import styles from "./Products.module.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
function Products() {
  return (
    <div className={styles.Products_container}>
        
      {popularProducts.map((product) => (
        <div key={product.id} className={styles.product_content}>
          <div className={styles.product_image}>
            <img src={product.img} alt={product.img} />
          </div>
          <div className={styles.product_info}>
            <div className={styles.icon}>
              <ShoppingCartOutlinedIcon />
            </div>
            <Link to='/detail' className={styles.icon}>
              <SearchOutlinedIcon style={{color: '#000'}} />
            </Link>
            <div className={styles.icon}>
              <FavoriteBorderOutlinedIcon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
