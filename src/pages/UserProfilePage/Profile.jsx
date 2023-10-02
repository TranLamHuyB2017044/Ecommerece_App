import styles from "./profile.module.scss";
import Header from "../../components/HeaderComponent/Header";
import Footer from "../../components/FooterComponent/Footer";
import { useSelector } from "react-redux";


export default function Profile() {
    const user = useSelector((state) => state.user.currentUser.data.others);
    const userId = user._id;
    const userName = user.username;
    const Email = user.email;
    const phone = user.phone;
    const address = user.address;
    const userAvatar = user.avatar;
    
    
    return (
        <div className={styles.profile_container} style={{marginTop: '100px'}}>
            <Header />
            <div className={styles.profile_content}>
                <div className={styles.title}>
                    <h2>My Profile</h2>
                    <p>Manage and protect your account</p>
                </div>
                <div className={styles.info}>
                    <table>
                        <tbody>
                            <tr>
                                <th>UserId</th>
                                <td>{userId}</td>
                            </tr>
                            <tr>
                                <th>UserName</th>
                                <td>{userName}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{Email}</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>{phone}</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>{address}</td>
                            </tr>
                            <tr>
                                <td>
                                    <button className={styles.Btn}>Edit</button>
                                </td>
                                <td>
                                    <button className={styles.Btn_delete}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.avatar}>
                        <img src={userAvatar} alt="user-avatar" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
