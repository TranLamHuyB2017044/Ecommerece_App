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
import MyAlert from "../../components/AlertComponent/Alert";
function DetailProduct() {
  const [product, setproduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();
  const localtion = useLocation();
  const id = localtion.pathname.split("/")[2];
  // const user = useSelector((state) => state.user.currentUser);
  // const userId = user.data.others._id;
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
  const handleAddCart = async () => {
    if(color === ''){
      MyAlert.Toast('error', 'please select a color first !')
      return false
    }else if(size === ''){
      MyAlert.Toast('error', 'please select a size first !')
      return false
    }else{
      dispatch(addProduct({ ...product, quantity, size, color }));
      // await usercRequest.put(`/user/${userId}`, { cart: id });
      MyAlert.Toast("success", "Product added successfully");
    }
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
          <div className={styles.Info_product}>
            <div className={styles.Colors}>
              <p>Color </p>
              <div className={styles.color_container}>
                {product.color?.map((color_item) => (
                  <button
                    key={color_item}
                    className={styles.color}
                    style={color === color_item ? {border: '0.5px solid teal'} : {border: 'none'}}
                    onClick={() => {setColor(color_item)}}
                  >
                    {color_item}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.Size}>
              <p>Size </p>
              <div className={styles.size_container}>
                {product.size?.map((size_item) => (
                  <button
                    key={size_item}
                    className={styles.size}
                    style={size === size_item ? {border: '0.5px solid teal'} : {border: 'none'}}
                    onClick={() => {setSize(size_item)}}
                  >
                    {size_item}
                  </button>
                ))}
              </div>
              
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
            <p className={styles.inStock}>{product.inStock} pieces available</p>
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
