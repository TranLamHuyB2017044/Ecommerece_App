import styles from "./PopularProducts.module.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../../request";
function Products({ cat }) {
  const [products, setProduct] = useState([]);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat
            ? `/product/${cat}`
            : "/product/"
        );
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  return (
    <div className={styles.Products_container}>
      {products.slice(0, 8).map((product) => (
        <div key={product._id} className={styles.product_content}>
          <div className={styles.product_image}>
            <img src={product.img} alt={product.img} />
          </div>
          <div className={styles.product_info}>
            <div className={styles.icon}>
              <ShoppingCartOutlinedIcon />
            </div>
            {user ? (
              <Link to={`/detail/${product._id}`} className={styles.icon}>
                <SearchOutlinedIcon style={{ color: "#000" }} />
              </Link>
            ) : (
              <Link to={`/login`} className={styles.icon}>
                <SearchOutlinedIcon style={{ color: "#000" }} />
              </Link>
            )}

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
