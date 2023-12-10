import styles from "./Purchased.module.scss";
import Header from "../../components/HeaderComponent/Header";
import Footer from "../../components/FooterComponent/Footer";
import GoToTop from "../../components/GoToTopComponent/GoToTop";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { publicRequest } from "../../request";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// import { publicRequest } from "../../request";
import Loading from "../../components/LoadingComponent/Loading";
// import MyAlert from "../../components/AlertComponent/Alert";

export default function Purchased() {
  const [userOrder, setUserOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user.currentUser.data.others);
  const userId = user._id;
  const api = publicRequest();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    const getUserOder = async () => {
      const rs = await api.get(`/order/userOrder/${userId}`);
      setLoading(false);
      setUserOrder(rs.data);
    };
    getUserOder();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);


  return (
    <div className={styles.Purchased_container}>
      <Header />
      <div className={styles.Purchased_contents}>
        <ul className={styles.purchase_navbar}>
          <li className={styles.edit_profile}>
            <img src={user.avatar} alt="user_avatar" />
            <div>
              <p>{user.username}</p>
              <Link to="/profile" className={styles.goTo_Profile}>
                <EditNoteOutlinedIcon /> Edit profile
              </Link>
            </div>
          </li>
        </ul>
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.Purchased}>
            {userOrder
              .map((order) => (
                <div key={order._id} className={styles.purchase_order}>
                  <div className={styles.status}>
                    <div className={styles.estimate_date}>
                      <LocalAirportIcon /> Estimated Delivery:{" "}
                      <p>
                        {months[new Date(order.createdAt).getMonth()]}{" "}
                        {new Date(order.createdAt).getDate()},{" "}
                        {new Date(order.createdAt).getFullYear()}
                      </p>
                    </div>
                    <p
                      style={{
                        color:
                          order.status === "Pending"
                            ? "blue"
                            : order.status === "Accepted"
                            ? "green"
                            : "red",
                      }}
                    >
                      {order.status}
                    </p>
                  </div>
                  {order.items.map((item) => (
                    <div key={item._id} className={styles.info}>
                      <img
                        src={item.productId.img[3].url_img}
                        alt="img_product"
                      />
                      <div className={styles.product}>
                        <div className={styles.items}>
                          <p className={styles.title}>{item.productId.title}</p>
                          <p className={styles.varian}>
                            Varian: {item.color}, {item.size}
                          </p>
                          <div className={styles.quantity}>
                            <p>X {item.quantity}</p>
                            <p>$ {(item.productId.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                        <div className={styles.info_shipping}>
                          <div className={styles.title}>
                            <p style={{ fontWeight: "bold" }}>Delivery</p>{" "}
                            {order.address}
                          </div>
                          <p className={styles.title}>{order.shipping}</p>
                          <p className={styles.title}>{order.payment}</p>
                        </div>
                      </div>
                    </div>
                  )).reverse()}
                  <div className={styles.order_total}>
                    <div className={styles.total}>
                      <div className={styles.date_ordered}>
                        Date Ordered:{" "}
                        {daysOfWeek[new Date(order.createdAt).getDay()]},{" "}
                        {months[new Date(order.createdAt).getMonth()]}{" "}
                        {new Date(order.createdAt).getDate()}{" "}
                        {new Date(order.createdAt).getFullYear()}
                        <br />
                        <p>
                          Time:{" "}
                          {new Date(order.createdAt).getHours() < 10
                            ? "0" + new Date(order.createdAt).getHours()
                            : new Date(order.createdAt).getHours()}
                          :
                          {new Date(order.createdAt).getMinutes() < 10
                            ? "0" + new Date(order.createdAt).getMinutes()
                            : new Date(order.createdAt).getMinutes()}{" "}
                          {new Date(order.createdAt).getHours() > 11
                            ? "PM"
                            : "AM"}
                        </p>
                      </div>
                      <p>
                        Order Total:{" "}
                        {order.items.reduce(
                          (total, item) =>
                            total + item.productId.price * item.quantity,
                          0
                        ).toFixed(2)}
                        $
                      </p>
                    </div>
                    <div className={styles.buy_again}>
                      <p>
                        Rate products by 1-1-2050 Rate now and get 300 coins
                      </p>
                      <Link to="/products">
                        <button>Buy Again</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
              .reverse()}
          </div>
        )}
      </div>
      <Footer />
      <GoToTop />
    </div>
  );
}
