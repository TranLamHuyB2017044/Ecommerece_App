import styles from "./Checkout.module.scss";
import Header from "../../components/HeaderComponent/Header";
import Footer from "../../components/FooterComponent/Footer";
import PlaceIcon from "@mui/icons-material/Place";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../../request";
import Loading from "../../components/LoadingComponent/Loading";
import MyAlert from "../../components/AlertComponent/Alert";
import { useNavigate } from "react-router-dom";

const payment_method = [
  {
    id: 1,
    method: "Cash on Delivery",
    icon: <PaymentsOutlinedIcon />,
  },
  {
    id: 2,
    method: "Credit Card",
    icon: <AccountBalanceWalletOutlinedIcon />,
  },
];
const shipping_method = [
  {
    id: 3,
    method: "Domestic Delivery",
    price: 5,
  },
  {
    id: 4,
    method: "International Delivery",
    price: 10,
  },
];

export default function Checkout() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const user = useSelector((state) => state.user.currentUser.data.others);
  const userId = user._id;
  const token = localStorage.getItem("access_token");
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [Shipping, setShipping] = useState("");
  const [shippingCost, setShippingCost] = useState();
  const [Payment, setPayment] = useState("");
  const [loading, setLoading] = useState(false);
  const refInput = useRef(null);
  const refInput2 = useRef(null);
  const navigate = useNavigate()
  const Total = products.reduce((total, product) => {
    return (total += product.quantity * product.productId.price);
  }, 0);
  
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const handleChangeAddress = () => {
    setAddress(refInput2.current.value);
    setPhone(refInput.current.value);

    closePopup();
  };
  useEffect(() => {
    const getUserOder = async () => {
      const rs = await publicRequest.get(`cart/${userId}`, {
        headers: {
          token: `Bearer ${token}`,
        },
      });
      setCart(rs.data);
    };
    getUserOder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  useEffect(() => {
    if (cart && cart.products) {
      const activeProducts = cart.products.filter(
        (product) => product.active === true
      );
      setProducts(activeProducts);
    }
  }, [cart]);
  const handlePaymentMethodChange = (id) => {
    payment_method.map((items) => {
      if (items.id === id) {
        setPayment(items.method);
      }
      return items;
    });
  };
  const handleShippingMethodChange = (id) => {
    shipping_method.map((items) => {
      if (items.id === id) {
        setShipping(items.method);
        setShippingCost(items.price);
      }
      return items;
    });
  };

  const handlePlaceOrder = async () => {
    try {
      window.scrollTo(0,0)
      setLoading(true);
      const data = {
        userId,
        items: products,
        phone: phone,
        address: address,
        payment: Payment,
        shipping: Shipping,
      };
      await publicRequest
        .post("/order", data, { headers: { token: `Bearer ${token}` } })
        .then((response) => {
          setLoading(false);
          console.log(response.data);
          MyAlert.Alert("success", "Your order has been created");
          setTimeout(() => {
            navigate('/user/purchase')    
          }, 2000)      
        });
    } catch (error) {
      MyAlert.Alert("error", error);
    }
  };
  return (
    <div className={styles.Checkout_container}>
      <Header />
      {loading ? (
        <div style={{height: '100vh', marginTop: '200px'}}>
          <Loading/>
        </div>
      ) : (
        <div className={styles.checkout_contents}>
          <div className={styles.delivery_address}>
            <strong>
              <PlaceIcon /> Delivery Address
            </strong>
            <div className={styles.address}>
              <p>
                {phone} | {address}
              </p>
              <p onClick={openPopup} className={styles.change}>
                Change
              </p>
            </div>
          </div>
          {isPopupOpen && (
            <div className={styles.popup_overlay}>
              <div className={styles.popup_content}>
                <p style={{ fontSize: "2rem" }}>Edit Address</p>
                <div className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      ref={refInput}
                      defaultValue={phone}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      ref={refInput2}
                      defaultValue={address}
                    />
                  </div>
                </div>
                <div className={styles.button}>
                  <button onClick={closePopup} className={styles.button_cancel}>
                    Cancel
                  </button>
                  <button
                    onClick={handleChangeAddress}
                    className={styles.button_confirm}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className={styles.products_ordered}>
            <div className={styles.feature}>
              <strong>Products Ordered</strong>
              <div className={styles.sub_quantity}>
                <p className={styles.unit}>Unit Price</p>
                <p className={styles.amount}>Amount</p>
                <p>Item Subtotal</p>
              </div>
            </div>
            {products.length > 0 ? (
              products.map((product, index) => (
                <div className={styles.items} key={product._id}>
                  <div className={styles.product_info}>
                    <p style={{ paddingRight: "1rem" }}>{index + 1}</p>
                    <img
                      src={product.productId.img[3].url_img}
                      alt="img-product"
                    />
                    <p className={styles.title}>{product.productId.title}</p>
                    <p className={styles.varian}>
                      Varian: {`${product.color}, ${product.size}`}
                    </p>
                  </div>
                  <div className={styles.sub_quantity}>
                    <p className={styles.price}>{product.productId.price} $</p>
                    <p>{product.quantity}</p>
                    <p className={styles.sub_total}>
                      {(product.productId.price * product.quantity).toFixed(2)}{" "}
                      $
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ margin: "2rem", padding: "2rem" }}>
                <Loading />
              </div>
            )}
          </div>
          <div className={styles.payment_method}>
            <div className={styles.select_method}>
              <strong>Payment Method</strong>
              {payment_method.map((method) => (
                <div key={method.id} className={styles.Payments}>
                  <div className={styles.methods}>
                    <input
                      type="radio"
                      checked={checked === method.id}
                      onChange={() => setChecked(method.id)}
                      onClick={() => handlePaymentMethodChange(method.id)}
                    />
                    <p>{method.method}</p>
                    {method.icon}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.shipping_options}>
              <strong>Shipping Option</strong>
              {shipping_method.map((method) => (
                <div key={method.id} className={styles.Shipping}>
                  <div className={styles.methods}>
                    <input
                      type="radio"
                      onChange={() => setChecked2(method.id)}
                      checked={checked2 === method.id}
                      onClick={() => handleShippingMethodChange(method.id)}
                    />
                    <p>{method.method}</p>
                    <p>{method.price} $</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.summary_order}>
              <form className={styles.form_order}>
                <div className={styles.form_group}>
                  <p className={styles.subtotal}>Merchandise Subtotal: </p>
                  <p className={styles.sub_price}>$ {Total.toFixed(2)}</p>
                </div>
                <div className={styles.form_group}>
                  <p className={styles.estimate}>Estimated Shipping: </p>
                  <p className={styles.sub_estimate}>
                    {shippingCost ? `$ ${shippingCost}` : ""}
                  </p>
                </div>
                <div className={styles.form_group}>
                  <p className={styles.discount}>Shipping Discount: </p>
                  <p className={styles.sub_discout}>
                    {shippingCost ? `- $ ${shippingCost}` : ""}
                  </p>
                </div>
                <div className={styles.form_group}>
                  <p className={styles.total}>Total: </p>
                  <p className={styles.total_price}>$ {Total.toFixed(2)}</p>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.Checkout}>
            <p>
              By clicking "Place Order", you are agreeing to Camile's General
              Transaction Terms
            </p>
            {Shipping && Payment !== "" ? (
              <button onClick={handlePlaceOrder} className={styles.submit}>
                Checkout Now
              </button>
            ) : (
              <button disabled className={styles.submit}>
                Checkout Now
              </button>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
