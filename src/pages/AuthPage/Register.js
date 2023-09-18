import styles from "./auth.module.scss";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavBarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import Announcement from "../../components/AnnouncementComponent/Announcement";
import { useForm } from "react-hook-form";
import { imgLogin } from "../../data";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { publicRequest } from "../../request";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignUp } from "../../redux/userRedux";
import MyAlert from "../../components/AlertComponent/Alert";

function Register() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    phone: '',
    address: '',
    password: "",
  });
  const schema = yup
    .object({
      username: yup.string().required("Username is required").min(3),
      email: yup
        .string()
        .required("Email is required")
        .email("email must be mail@example.com"),
      phone: yup.string(),
      address: yup.string(),
      password: yup.string().required("Password is require").min(3),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const onChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const onSignup = async () => {
    try {
      const rs = await publicRequest.post("/auth/register", newUser);
      dispatch(SignUp(rs));
      MyAlert.Alert("success", "Registered successfully");
      navigate("/login");
    } catch (error) {
      MyAlert.Alert("error", error.response.data);

    }
  };
  const enterSignup = async (e) => {
    if (e.key === "enter") {
      try {
        const rs = await publicRequest.post("/auth/register", newUser);
        dispatch(SignUp(rs));
        MyAlert.Alert("success", "Registered successfully");
        navigate("/login");
      } catch (error) {
        MyAlert.Alert("error", error.response.data);
      }
    }
  };
  return (
    <div className={styles.Register_container}>
      <Header />
      <NavBar />
      <Announcement />
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <img src={imgLogin} alt="Rollover" />
        </div>
        <div className={styles.auth_form} style={{ alignItems: "center" }}>
          <form onSubmit={handleSubmit(onSignup)}>
            <div className={styles.change_form}>
              <Link className={styles.text} to="/login">
                Sign In |
              </Link>
              <Link className={styles.text} to="/register">
                {" "}
                Register
              </Link>
            </div>
            <div className={styles.input_group}>
              <label htmlFor="username">UserName</label>
              <input
                id="username"
                {...register("username")}
                placeholder=" huyhandsome"
                onChange={onChange}
                name="username"
              />
              <p className={styles.error}>{errors.username?.message}</p>
            </div>
            <div className={styles.input_group}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                {...register("email")}
                placeholder=" huyhandsome@gmail.com"
                onChange={onChange}
                name="email"
              />
              <p className={styles.error}>{errors.email?.message}</p>
            </div>
            <div className={styles.input_group}>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                {...register("phone")}
                placeholder=" 0123 456 789"
                onChange={onChange}
                name="phone"
              />
              <p className={styles.error}>{errors.phone?.message}</p>
            </div>
            <div className={styles.input_group}>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                {...register("address")}
                placeholder=" HCM123 street, VietNam, VN202"
                onChange={onChange}
                name="address"
              />
              <p className={styles.error}>{errors.address?.message}</p>
            </div>
            <div className={styles.input_group}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                {...register("password")}
                type="password"
                onChange={onChange}
                name="password"
              />
              <p className={styles.error}>{errors.password?.message}</p>
            </div>
            {/* <div className={styles.input_group_file}>
                <label htmlFor="file">Choose your avatar</label>
                <input type="file" id="file" {...register("file")} />
            </div> */}
            <input onKeyDown={enterSignup} className={styles.submit} type="submit" />

          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
