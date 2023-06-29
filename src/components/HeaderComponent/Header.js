import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import styles from './Header.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function Header() {
    return ( 
        <div className={styles.header_container}>
            <div className={styles.header_left}>
                <span className={styles.language}>EN</span>
                <div className={styles.Search}>
                    <input placeholder='Find something...'/>
                    <SearchIcon/>
                </div>
            </div>
            <div className={styles.header_center}>CAMILE.</div>
            <div className={styles.header_right}>
                <p>REGISTER</p>
                <p>SIGN IN</p>
                <IconButton aria-label="cart">
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
            </div>
        </div>
    );
}

export default Header;