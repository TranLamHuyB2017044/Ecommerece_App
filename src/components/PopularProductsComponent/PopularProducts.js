import styles from "./PopularProducts.module.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../../request";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Products({ cat }) {
  const [products, setProduct] = useState([]);
  const user = useSelector((state) => state.user?.currentUser);

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
            <LazyLoadImage
              height="100%"
              effect="blur"
              src={product.img[3].url_img}
              alt={product.img[3].url_img}
            />
          </div>
          <div className={styles.product_info}>
            {/* <div className={styles.icon}>
              <ShoppingCartOutlinedIcon />
            </div> */}
            {user ? (
              <Link to={`/detail/${product._id}`} onClick={() => window.scrollTo(0, 0)} className={styles.icon}>
                <SearchOutlinedIcon style={{ color: "#000" }} />
              </Link>
            ) : (
              <Link to={`/login`} className={styles.icon}>
                <SearchOutlinedIcon style={{ color: "#000" }} />
              </Link>
            )}

            {/* <div className={styles.icon}>
              <FavoriteBorderOutlinedIcon />
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
