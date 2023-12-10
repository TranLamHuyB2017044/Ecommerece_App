import styles from "./EditProfile.module.scss";
import Header from "../../components/HeaderComponent/Header";
import Footer from "../../components/FooterComponent/Footer";
import Loading from "../../components/LoadingComponent/Loading";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { publicRequest } from "../../request";
import Alert from "../../components/AlertComponent/Alert";

export default function Profile() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
  });
  const userId = useSelector((state) => state.user.currentUser.data.others._id);
  const [user, setUser] = useState({});
  const api = publicRequest();

  useEffect(() => {
    const getUserInfo = async () => {
      const rs = await api.get(`/user/${userId}`);
      setUser(rs.data);
    };
    getUserInfo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  const [avatar, setAvatar] = useState([]);
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      let { username, email, phone, address } = newUser;
      console.log(username, email, phone, address);
      if (
        username.length === 0 &&
        email.length === 0 &&
        phone.length === 0 &&
        address.length === 0 &&
        avatar.length === 0
      ) {
        Alert.Alert("error", "You must fill at least one");
      } else {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("address", address);
        formData.append("avatar", avatar[0]); // Assuming avatar is a File object

        // Add additional fields as needed

        setLoading(true);
        await api.put(`user/${userId}`, formData).then((response) => {
          console.log(response.data);
          setUser(response.data);
          setLoading(false);
          Alert.Alert("success", "Update successfully");
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000)
      }
    } catch (error) {
      Alert.Alert("error", error.response.data);
    }
  };
  return (
    <div className={styles.profile_container}>
      <Header />
      <div className={styles.profile_content}>
        <div className={styles.title}>
          <h2>Edit Profile</h2>
          <p>Manage and protect your account</p>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.info}>
            <form onSubmit={handleUpdateUser}>
              <div className={styles.info_user}>
                <div className={styles.form_group}>
                  <label htmlFor="username">UserName</label>
                  <input
                    type="text"
                    id="username"
                    defaultValue={user.username}
                    onChange={onChange}
                    name="username"
                  />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    placeholder=" Adame@gmail.com"
                    defaultValue={user.email}
                    onChange={onChange}
                    name="email"
                  />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="phone"
                    id="phone"
                    placeholder=" +1 012 233 012"
                    defaultValue={user.phone}
                    onChange={onChange}
                    name="phone"
                  />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    placeholder=" NewYork | Usa"
                    defaultValue={user.address}
                    onChange={onChange}
                    name="address"
                  />
                </div>

                <button type="submit">Save</button>
              </div>
              <div className={styles.avatar}>
                <label htmlFor="img">
                  <img src={user.avatar} alt="user avatar" />
                </label>
                <input
                  type="file"
                  id="img"
                  onChange={(e) => setAvatar(e.target.files)}
                />
                {/* <button type="button" className={styles.select}>
                <label htmlFor="file_upload">Select Image</label>
              </button> */}
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
