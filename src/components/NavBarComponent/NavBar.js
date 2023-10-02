import styles from './NavBar.module.scss'
import { Link } from "react-router-dom";
function NavBar() {
    return ( 
        <div className={styles.Navbar_container}>
            <ul className={styles.Navbar_items}>
                <Link to='/' className={styles.item}>Home</Link>
                <Link to= '/products' className={styles.item}>Shop</Link>
                <Link to= '/products/?category=Men' className={styles.item}>Men</Link>
                <Link to= '/products/?category=Women' className={styles.item}>Women</Link>
            </ul>
        </div>
    );
}

export default NavBar;