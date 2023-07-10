import styles from "./Cart.module.scss";
import Announcement from "../../components/AnnouncementComponent/Announcement";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavBarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import { useSelector } from "react-redux";
function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={styles.cart_container}>
      <Header />
      <NavBar />
      <Announcement />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>YOUR CART</h1>
        <div className={styles.top}>
          <button className={styles.continue}>CONTINUE SHOPPING</button>
          <div className={styles.top_center}>
            <p>Shopping bag ({cart.quantity})</p>
            <p>Your Wishlist (0)</p>
          </div>
          <button className={styles.checkout}>CHECKOUT NOW</button>
        </div>
        <div className={styles.bot}>
            <div className={styles.bot_left}>
                {cart.products.map(product => (
                    <div className={styles.product_info}>
                        <div className={styles.info}>
                            <div className={styles.img}>
                            <img src={product.img} alt="shoes" />
                            </div>
                            <div className={styles.detail_info}>
                            <p className={styles.name}>
                                <span style={{ fontWeight: "bold" }}>Product:</span> {product.title}
                            </p>
                            <p className={styles.id}>
                                <span style={{ fontWeight: "bold" }}>ID:</span> {product._id}
                            </p>
                            <span
                                style={{ fontWeight: "bold", display: "flex", gap: "1rem" }}
                            >
                                Color: <div className={styles.colors} 
                                style={{
                                    color: product.color,
                                    backgroundColor: product.color
                                }}>a</div>
                            </span>
                            <p className={styles.size}>
                                <span style={{ fontWeight: "bold" }}>Size:</span> {product.size}
                            </p>
                            </div>
                        </div>
                        <div className={styles.prices}>
                            <div className={styles.Quantity}>
                            <p className={styles.minus}>-</p>
                            <p className={styles.number}>{product.quantity}</p>
                            <p className={styles.plus}>+</p>
                            </div>
                            <div className={styles.price}>$ {product.price*product.quantity}</div>
                        </div>
                    </div>
                ))}
            </div>
          <div className={styles.summary_order}>
            <form className={styles.form_order}>
              <h1 className={styles.form_title}>ORDER SUMMARY</h1>
              <div className={styles.form_group}>
                <p className={styles.subtotal}>SubTotal: </p>
                <p className={styles.sub_price}>$ {cart.total}</p>
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
                <p className={styles.total_price}>$ {cart.total}</p>
              </div>
              <button className={styles.submit}>Checkout Now</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
