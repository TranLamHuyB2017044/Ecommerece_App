import styles from "./EditProfile.module.scss";
import Header from "../../components/HeaderComponent/Header";
import Announcement from "../../components/AnnouncementComponent/Announcement";
import NavBar from "../../components/NavBarComponent/NavBar";
import Footer from "../../components/FooterComponent/Footer";
import { useSelector } from "react-redux";
import { useState } from "react";
import { publicRequest } from "../../request";
export default function Profile() {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [image, setImage] = useState("");
    const user = useSelector((state) => state.user.currentUser.data);
    const userId = user.others._id;
    const urlImage = user.others.avatar;

    const handleUpdate = async (e) => {
        e.preventDefault();
        const accessToken = user.accessToken;
        const newUser = await publicRequest.put(
            `/user/${userId}`,
            {
                Headers: {
                    token: `Bearer ${accessToken}`,
                },
            },
            {
                username,
                email,
                password
            }
        );
        console.log(newUser.data);
        console.log("update");
    };
    // const handleFileUpload = (e) => {
    //     const img = e.target.files[0];
    //     const url = URL.createObjectURL(e.target.files[0]);
    //     setImage = img;
    //     urlImage = url;
    //     console.log(image, urlImage);
    // };
    return (
        <div className={styles.profile_container}>
            <Header />
            <NavBar />
            <Announcement />
            <div className={styles.profile_content}>
                <div className={styles.title}>
                    <h2>Edit Profile</h2>
                    <p>Manage and protect your account</p>
                </div>
                <div className={styles.info}>
                    <form onSubmit={handleUpdate}>
                        <div className={styles.info_user}>
                            <div className={styles.form_group}>
                                <p>UserID</p>
                                <p>{userId}</p>
                            </div>
                            <div className={styles.form_group}>
                                <p>Username</p>
                                <input
                                    type="text"
                                    value={user.others.email}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className={styles.form_group}>
                                <p>Email</p>
                                <input
                                    type="text"
                                    value={user.others.email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={styles.form_group}>
                                <p>Password</p>
                                <input
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit">Save</button>
                        </div>
                        <div className={styles.avatar}>
                            <label htmlFor="file_upload">
                                <img src={urlImage} alt="user avatar" />
                            </label>
                            <input
                                type="file"
                                lable="Image"
                                id="file_upload"
                                name="my_file"
                                accept="jpg,jpeg,png"
                                // onChange={handleFileUpload}
                            />
                            <button type="button" className={styles.select}>
                                <label htmlFor="file_upload">Select Image</label>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
