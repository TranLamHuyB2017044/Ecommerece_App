import Announcement from "../../components/AnnouncementComponent/Announcement";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavBarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import styles from "./Detail.module.scss";
import { useEffect, useState } from "react";
import { publicRequest } from "../../request";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
import MyAlert from '../../components/AlertComponent/Alert'
function DetailProduct() {
  const [product, setproduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("#8eaac0");
  const [size, setSize] = useState("S");
  const dispatch = useDispatch();
  const localtion = useLocation();
  const id = localtion.pathname.split("/")[2];
  useEffect(() => {
    const productList = async () => {
      const rs = await publicRequest.get(`/product/${id}/`);
      setproduct(rs.data);
    };
    productList();
  }, [id]);
  const handleClick = (type) => {
    if (type === "incr") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };
  const handleAddCart = () => {
      dispatch(addProduct({ ...product, quantity, size, color }));
      MyAlert.Toast('success','Product added successfully')
  };
  return (
    <div className="Detail_Container">
      <Header />
      <NavBar />
      <Announcement />
      <div className={styles.wrapper}>
        <div className={styles.image_container}>
          <img src={product.img} alt="img-detail" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.product_name}>{product.title}</h2>
          <p className={styles.description}>{product.desc}</p>
          <p className={styles.price}>{product.price} $</p>
          <div className={styles.Colors}>
            <p style={{ fontWeight: "500" }}>Color: </p>
            {product.color?.map((color) => (
              <div
                key={color}
                className={styles.color}
                style={{
                  color: color,
                  backgroundColor: color,
                }}
                onClick={() => setColor(color)}
              >
                a
              </div>
            ))}

            <div className={styles.Size}>
              <p>Size</p>
              <select onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((size, index) => (
                  <option value={size} key={index}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.Quantity}>
            <p className={styles.quantity}>Quantity: </p>
            <p className={styles.minus} onClick={() => handleClick("desc")}>
              -
            </p>
            <p className={styles.number}>{quantity}</p>
            <p className={styles.plus} onClick={() => handleClick("incr")}>
              +
            </p>
          </div>
          <div className={styles.AddCart_Button}>
            <button onClick={handleAddCart}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailProduct;
