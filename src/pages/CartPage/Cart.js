import styles from "./Cart.module.scss";
import Header from "../../components/HeaderComponent/Header";
import Footer from "../../components/FooterComponent/Footer";
import { useSelector } from "react-redux";
import {
  decrementProduct,
  incrementQuantity,
  removeProduct,
} from "../../redux/cartRedux";
import {userRequest} from '../../request'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import myAlert from "../../components/AlertComponent/Alert";


function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const userId = useSelector((state) => state.user.currentUser?.data.others._id)
  const Total = cartProducts.reduce((total, product) => {
    return (total += product.quantity * product.productId.price);
  }, 0);

  // Update product quantity
  const handleClick = (index, type) => {
    cartProducts.map((item, i) => {
      if (type === "incr") {
        if (i === index) {
          dispatch(incrementQuantity(i));
        }
      } else {
        if (i === index) {
          dispatch(decrementProduct(i));
        }
      }
      return item;
    });
  };
  const handleDeleteProduct =  (id) => {
    // eslint-disable-next-line array-callback-return
    cartProducts.map((product, index) => {
      if(index === id) {
        userRequest.delete(`/cart/${userId}`,  {data: {productIndex: id}})
        dispatch(removeProduct(id))
      }
    })
  }
  const handleCheckout = (e) => {
    e.preventDefault();
    myAlert.Alert("success", "Checkout completed !!");
  };

  return (
    <div className={styles.cart_container}>
      <Header />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>YOUR CART</h1>
        <div className={styles.top}>
          <Link to="/products">
            <button className={styles.continue}>CONTINUE SHOPPING</button>
          </Link>
          <div className={styles.top_center}>
            <p>Shopping bag ({cartProducts.length})</p>
            <p>Your Wishlist (0)</p>
          </div>
          <button className={styles.checkout}>CHECKOUT NOW</button>
        </div>
        <div className={styles.bot}>
          <div className={styles.bot_left}>
            {cartProducts.length > 0 ? cartProducts
              .map((product, index) => (
                <div key={index} className={styles.product_info}>
                  <div className={styles.info}>
                    <div className={styles.img}>
                      <img
                        src={product.productId.img[3].url_img}
                        alt={product.productId.title}
                      />
                    </div>
                    <div className={styles.detail_info}>
                      <p className={styles.name}>
                        <span style={{ fontWeight: "bold" }}>Product: </span>
                        {product.productId.title}
                      </p>
                      <p className={styles.id}>
                        <span style={{ fontWeight: "bold" }}>ID: </span>
                        {product.productId._id}
                      </p>
                      <p className={styles.size}>
                        <span style={{ fontWeight: "bold" }}>Color: </span>
                        {product.color}
                      </p>
                      <p className={styles.size}>
                        <span style={{ fontWeight: "bold" }}>Size: </span>
                        {product.size}
                      </p>
                    </div>
                  </div>
                  <div className={styles.prices}>
                    <div className={styles.Quantity}>
                      <p
                        className={styles.minus}
                        onClick={() => handleClick(index, "decr")}
                      >
                        -
                      </p>
                      <p className={styles.number}>{product.quantity}</p>
                      <p
                        className={styles.plus}
                        onClick={() => handleClick(index, "incr")}
                      >
                        +
                      </p>
                    </div>
                    <div className={styles.price}>
                      ${" "}
                      {(product.productId.price * product.quantity).toFixed(2)}
                    </div>
                  </div>
                  <div className={styles.remove}>
                    <p
                      className={product.id}
                      onClick={() => handleDeleteProduct(index)}
                    >
                      &times;
                    </p>
                  </div>
                </div>
              )).reverse()  
              : 
              <div className={styles.empty_cart}>
                <img width='120px' src='https://png.pngtree.com/png-clipart/20221223/ourmid/pngtree-shoping-clipart-image-download-vector-art-png-image_6534634.png' alt="src" />
                <p>Your shopping cart is empty</p>
                <Link to="/products"><button>Go shopping now</button></Link>
              </div>
            }
          </div>
          <div className={styles.summary_order}>
            <form className={styles.form_order}>
              <h1 className={styles.form_title}>ORDER SUMMARY</h1>
              <div className={styles.form_group}>
                <p className={styles.subtotal}>SubTotal: </p>
                <p className={styles.sub_price}>$ {Total}</p>
              </div>
              <div className={styles.form_group}>
                <p className={styles.estimate}>Estimated Shipping: </p>
                <p className={styles.sub_estimate}>$ 5.90</p>
              </div>
              <div className={styles.form_group}>
                <p className={styles.discount}>Shipping Discount: </p>
                <p className={styles.sub_discout}>$ -5.90</p>
              </div>
              <div className={styles.form_group}>
                <p className={styles.total}>Total: </p>
                <p className={styles.total_price}>$ {Total}</p>
              </div>
              <button onClick={handleCheckout} className={styles.submit}>
                Checkout Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
