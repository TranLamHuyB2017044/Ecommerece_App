import { useRef } from 'react';
import styles from './NavBar.module.scss'
import { Link } from "react-router-dom";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
function NavBar() {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle(styles.responsive_nav);
    }
    return ( 
        <div className={styles.Navbar_container}>
            <ul ref={navRef} className={styles.Navbar_items}>
                <Link to='/' className={styles.item}>Home</Link>
                <Link to= '/products' className={styles.item}>Shop</Link>
                <Link to= '/products/?category=Men' className={styles.item}>Men</Link>
                <Link to= '/products/?category=Women' className={styles.item}>Women</Link>
            </ul>

            <div onClick={showNavbar} className={styles.nav_btn}>
                <MenuOutlinedIcon/>
            </div>
        </div>
    );
}

export default NavBar;