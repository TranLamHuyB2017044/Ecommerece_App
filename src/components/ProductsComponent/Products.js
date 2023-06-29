import { popularProducts } from "../../data";
import styles from "./Products.module.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
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
            <div className={styles.icon}>
              <SearchOutlinedIcon />
            </div>
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
