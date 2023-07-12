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
import { useState } from "react";
import { publicRequest } from "../../request";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { SignUp } from "../../redux/userRedux";

  
function Register() {
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  })
  const schema = yup.object({
    firstname: yup.string().required('First Name is required'),
    lastname: yup.string().required('Last Name is required').min(3),
    username: yup.string().required('Username is required').min(3),
    email: yup.string().required('Email is required').email('email must be mail@example.com'),
    password: yup.string().required('Password is require').min(3),
    
}).required();
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const dispatch = useDispatch();
  const onChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }
  const navigate = useNavigate()
  const onSignup = async () =>{

    console.log(newUser);
    try {
      const rs = await publicRequest.post('/auth/register', newUser)
      dispatch(SignUp(rs))
      alert('successfully registered')
      navigate('/login')
    } catch (error) {
      alert(error.message)
    }

  }
  return (
    <div className={styles.Register_container}>
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
        <div className={styles.auth_form}>
          <form  onSubmit={handleSubmit(onSignup)}>
            <div className={styles.change_form}>
                <Link className={styles.text} to='/login' >Sign In |</Link>
                <Link className={styles.text} to='/register' > Register</Link>
            </div>
            <div className={styles.input_group}>
                <label htmlFor="firstname" >FirstName</label>
                <input id="firstname" {...register("firstname") } placeholder=" tran"  onChange={onChange} name="firstname"/>
                <p className={styles.error}>{errors.firstname?.message}</p>
            </div>
           
            <div className={styles.input_group}>
                <label htmlFor="lastname" >LastName</label>
                <input id="lastname" {...register("lastname")} placeholder=" huy" onChange={onChange} name="lastname"/>
                <p className={styles.error}>{errors.lastname?.message}</p>
            </div>
            <div className={styles.input_group}>
                <label htmlFor="username" >UserName</label>
                <input id="username" {...register("username")} placeholder=" huyhandsome" onChange={onChange} name="username"/>
                <p className={styles.error}>{errors.username?.message}</p>
            </div>
            <div className={styles.input_group}>
                <label htmlFor="email" >Email</label>
                <input id="email" {...register("email")} placeholder=" huyhandsome@gmail.com" onChange={onChange} name="email"/>
                <p className={styles.error}>{errors.email?.message}</p>
            </div>
            <div className={styles.input_group}>
                <label htmlFor="password" >Password</label>
                <input id="password" {...register("password")} type="password"  onChange={onChange} name="password"/>
                <p className={styles.error}>{errors.password?.message}</p>
            </div>
            <div className={styles.input_group_checkbox}>
                <input type="checkbox" {...register("checkbox")} />
                <p>Sign up for our newsletter</p>
            </div>
            <button className={styles.submit} type="submit" >Register</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
