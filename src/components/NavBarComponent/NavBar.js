import styles from './NavBar.module.scss'
import { Link } from "react-router-dom";
function NavBar() {
    return ( 
        <div className={styles.Navbar_container}>
            <ul className={styles.Navbar_items}>
                <Link to='/' className={styles.item}>Home</Link>
                <Link to='/Products' className={styles.item}>Shop</Link>
                <Link to='/Detail' className={styles.item}>Shoes</Link>
                <li className={styles.item}>Jewelry</li>
                <li className={styles.item}>New Arrive</li>
            </ul>
        </div>
    );
}

export default NavBar;