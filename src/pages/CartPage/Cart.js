import styles from "./Cart.module.scss";
import Announcement from "../../components/AnnouncementComponent/Announcement";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavBarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import { imgShoes, imgHoodie } from "../../data";
function Cart() {
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
            <p>Shopping bag (2)</p>
            <p>Your Wishlist (0)</p>
          </div>
          <button className={styles.checkout}>CHECKOUT NOW</button>
        </div>
        <div className={styles.bot}>
          <div className={styles.bot_left}>
            <div className={styles.product_info}>
              <div className={styles.info}>
                <div className={styles.img}>
                  <img src={imgShoes} alt="shoes" />
                </div>
                <div className={styles.detail_info}>
                  <p className={styles.name}>
                    <span style={{ fontWeight: "bold" }}>Product:</span> Air
                    Jodan 1 Mid SE
                  </p>
                  <p className={styles.id}>
                    <span style={{ fontWeight: "bold" }}>ID:</span> 12345678
                  </p>
                  <span
                    style={{ fontWeight: "bold", display: "flex", gap: "1rem" }}
                  >
                    Color: <div className={styles.colors}>a</div>{" "}
                  </span>
                  <p className={styles.size}>
                    <span style={{ fontWeight: "bold" }}>Size:</span> 37.5
                  </p>
                </div>
              </div>
              <div className={styles.prices}>
                <div className={styles.Quantity}>
                  <p className={styles.minus}>-</p>
                  <p className={styles.number}>1</p>
                  <p className={styles.plus}>+</p>
                </div>
                <div className={styles.price}>$ 50</div>
              </div>
            </div>
            <div className={styles.product_info}>
              <div className={styles.info}>
                <div className={styles.img}>
                  <img src={imgHoodie} alt="hoodie" />
                </div>
                <div className={styles.detail_info}>
                  <p className={styles.name}>
                    <span style={{ fontWeight: "bold" }}>Product:</span> Hoodie Adidas Championships V6
                  </p>
                  <p className={styles.id}>
                    <span style={{ fontWeight: "bold" }}>ID:</span> 12345679
                  </p>
                  <span
                    style={{ fontWeight: "bold", display: "flex", gap: "1rem" }}
                  >
                    Color: <div style={{backgroundColor:'#345a6f', color: '#345a6f'}} className={styles.colors}>a</div>
                  </span>
                  <p className={styles.size}>
                    <span style={{ fontWeight: "bold" }}>Size</span> XL
                  </p>
                </div>
              </div>
              <div className={styles.prices}>
                <div className={styles.Quantity}>
                  <p className={styles.minus}>-</p>
                  <p className={styles.number}>2</p>
                  <p className={styles.plus}>+</p>
                </div>
                <div className={styles.price}>$ 250</div>
              </div>
            </div>
          </div>
          <div className={styles.summary_order}>
            <form className={styles.form_order}>
                <h1 className={styles.form_title}>ORDER SUMMARY</h1>
                <div className={styles.form_group}>
                    <p className={styles.subtotal}>SubTotal: </p>
                    <p className={styles.sub_price}>$ 80</p>
                </div>
                <div className={styles.form_group}>
                    <p className={styles.estimate}>Estimated Shipping: </p>
                    <p className={styles.sub_estimate}>$ 5.90</p>
                </div>
                <div className={styles.form_group}>
                    <p className={styles.discount}>Shipping Discount: </p>
                    <p className={styles.sub_discout}>$ -3.2</p>
                </div>
                <div className={styles.form_group}>
                    <p className={styles.total}>Total: </p>
                    <p className={styles.total_price}>$ 80</p>
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
