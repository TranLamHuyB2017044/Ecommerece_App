import styles from "./auth.module.scss";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavBarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import Announcement from "../../components/AnnouncementComponent/Announcement";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import {Login} from '../../redux/userRedux'
import {publicRequest} from '../../request'
import { useForm } from "react-hook-form";
import {imgLogin} from '../../data'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import MyAlert from "../../components/AlertComponent/Alert";  
function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const schema = yup.object({
    UserName: yup.string().required('UserName is required'),
    Password: yup.string().required('Password is required'),
  })
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onLogin = async () =>{
    try {
      const user = await publicRequest.post('/auth/login', {username, password})
      dispatch(Login(user))
      if(user){
        MyAlert.Alert(
          'success', 'Login successfully'
        )
        navigate('/')
      }
    } catch (error) {
      MyAlert.Alert('error', error.response.data);
    }
    
  }
  const enterLogin = async (e) => {
    if(e.key === 'enter'){
      try {
        const user = await publicRequest.post('/auth/login', {username, password})
        dispatch(Login(user))
        if(user){
          MyAlert.Alert(
            'success', 'Login successfully'
          )
          navigate('/')
        }
      } catch (error) {
        MyAlert.Alert('error', error.response.data);
      }
    }
  }
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
          <form onSubmit={handleSubmit(onLogin)}>
            <div className={styles.change_form}>
                <Link className={styles.text} to='/login' >Sign In |</Link>
                <Link className={styles.text} to='/register' > Register</Link>
            </div>
            <div className={styles.input_group}>
                <label htmlFor="UserName" >UserName</label>
                <input id="UserName" {...register("UserName")} onChange={(e) => setUsername(e.target.value)}/>
                <p className={styles.error}>{errors.UserName?.message}</p>
            </div>
            <div className={styles.input_group}>
                <label htmlFor="Password" >Password</label>
                <input id="Password" {...register("Password")} type="password" onChange={(e) => setPassword(e.target.value)} />
                <p className={styles.error}>{errors.Password?.message}</p>
            </div>
            <input onKeyDown={enterLogin} className={styles.submit} type="submit" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
