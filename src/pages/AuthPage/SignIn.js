import styles from "./auth.module.scss";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavBarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import Announcement from "../../components/AnnouncementComponent/Announcement";
import { useForm } from "react-hook-form";
import {imgLogin} from '../../data'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from "react-router-dom";
const schema = yup.object({
    firstName: yup.string().required('First Name is required'),
    LastName: yup.string().required('Last Name is required'),
    Email: yup.string().required('Email is required').email('email must be mail@example.com'),
    Password: yup.string().required('Password is require').min(8),
    PhoneNumber: yup.number().positive().integer().required(),
  }).required();

  
function SignIn() {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.SignIn_container}>
      <Header />
      <NavBar />
      <Announcement />
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <img
            src={imgLogin}
            alt="Rollover"
          />
        </div>
        <div className={styles.auth_form} style={{alignItems: 'center'}}>
          <form  onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.change_form}>
                <Link className={styles.text} to='/login' >Sign In |</Link>
                <Link className={styles.text} to='/register' > Register</Link>
            </div>
            <div className={styles.input_group}>
                <label htmlFor="Email" >Email</label>
                <input id="Email" {...register("Email")} />
                <p className={styles.error}>{errors.Email?.message}</p>
            </div>
            <div className={styles.input_group}>
                <label htmlFor="Password" >Password</label>
                <input id="Password" {...register("Password")} />
                <p className={styles.error}>{errors.Password?.message}</p>
            </div>
            <div className={styles.input_group_checkbox}>
                <input type="checkbox" {...register("checkbox")} />
                <p>Remember me</p>
            </div>
            <button className={styles.submit} type="submit">Sign In</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
