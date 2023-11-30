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
// import Loading from "../../components/LoadingComponent/Loading";
// import MyAlert from "../../components/AlertComponent/Alert";

export default function Purchased() {
  const [userOder, setUserOrder] = useState([]);
  const user = useSelector((state) => state.user.currentUser.data.others);
  const userId = user._id;
  const token = localStorage.getItem("access_token");
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
      const rs = await publicRequest.get(`/order/${userId}`, {
        headers: {
          token: `Bearer ${token}`,
        },
      });
      setUserOrder(rs.data);
    };
    getUserOder();
  }, [token, userId]);

  const [activeItem, setActiveItem] = useState("All");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  console.log(userOder);
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
          <li
            className={`${styles.navbar_items} ${
              activeItem === "All" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("All")}
          >
            All
          </li>
          <li
            className={`${styles.navbar_items} ${
              activeItem === "Pending" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("Pending")}
          >
            Pending
          </li>
          <li
            className={`${styles.navbar_items} ${
              activeItem === "Accepted" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("Accepted")}
          >
            Accepted
          </li>
          <li
            className={`${styles.navbar_items} ${
              activeItem === "Rejected" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("Rejected")}
          >
            Rejected
          </li>
        </ul>
        <div className={styles.Purchased}>
          {userOder
            .map((order) => (
              <div key={order._id} className={styles.purchase_order}>
                <div className={styles.status}>
                  <p className={styles.estimate_date}>
                    <LocalAirportIcon /> Estimated Delivery:{" "}
                    <p>
                      {months[new Date(order.createdAt).getMonth()]}{" "}
                      {new Date(order.createdAt).getDate()},{" "}
                      {new Date(order.createdAt).getFullYear()}
                    </p>
                  </p>
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
                          <p>$ {item.productId.price * item.quantity}</p>
                        </div>
                      </div>
                      <div className={styles.info_shipping}>
                        <p className={styles.title}>
                          <p style={{ fontWeight: "bold" }}>Delivery</p>{" "}
                          {order.address}
                        </p>
                        <p className={styles.title}>{order.shipping}</p>
                        <p className={styles.title}>{order.payment}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className={styles.order_total}>
                  <div className={styles.total}>
                    <p className={styles.date_ordered}>
                      Date Ordered:{" "}
                      {daysOfWeek[new Date(order.createdAt).getDay()]},{" "}
                      {new Date(order.createdAt).getDate()} -
                      {new Date(order.createdAt).getMonth() + 1} -
                      {new Date(order.createdAt).getFullYear()}
                      <br />
                      <p>
                        Time: {new Date(order.createdAt).getHours()}h :{" "}
                        {new Date(order.createdAt).getMinutes() + 1}m
                      </p>
                    </p>
                    <p>
                      Order Total:{" "}
                      {order.items.reduce(
                        (total, item) =>
                          total + item.productId.price * item.quantity,
                        0
                      )}
                      $
                    </p>
                  </div>
                  <div className={styles.buy_again}>
                    <p>Rate products by 1-1-2050 Rate now and get 300 coins</p>
                    <Link to="/products">
                      <button>Buy Again</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
            .reverse()}
        </div>
      </div>
      <Footer />
      <GoToTop />
    </div>
  );
}
