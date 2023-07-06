import styles from './NavBar.module.scss'
import { Link } from "react-router-dom";
function NavBar() {
    return ( 
        <div className={styles.Navbar_container}>
            <ul className={styles.Navbar_items}>
                <Link to='/' className={styles.item}>Home</Link>
                <li className={styles.item}>Shop</li>
                <li  className={styles.item}>Shoes</li>
                <li className={styles.item}>Jewelry</li>
                <li className={styles.item}>New Arrive</li>
            </ul>
        </div>
    );
}

export default NavBar;