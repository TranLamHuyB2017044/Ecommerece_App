import Announcement from "../../components/AnnouncementComponent/Announcement";
import Footer from "../../components/FooterComponent/Footer";
import Header from "../../components/HeaderComponent/Header";
import NavBar from "../../components/NavBarComponent/NavBar";
import Products from "../../components/ProductsComponent/Products";
import Newsletter from "../../components/NewsletterComponent/Newsletter";
import styles from './ProductList.module.scss'
import GoToTop from "../../components/GoToTopComponent/GoToTop";
function ProductList() {
    return ( 
        <div className="ProductList_Container">
            <Header/>
            <NavBar/>
            <Announcement/>
            <div className={styles.Title}>Dresses</div>
            <div className={styles.Filters_container}>
                <div className={styles.filter_left}>
                    <p>Filter Product: </p>
                    <select>
                        <option disabled selected>Color</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>White</option>
                        <option>Pink</option>
                        <option>Green</option>
                    </select>
                    <select>
                        <option disabled selected>Size</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>
                <div className={styles.filter_right}>
                    <p>Sort Product: </p>
                    <select>
                        <option selected>Newest</option>
                        <option>Price (Asc)</option>
                        <option>Price (Desc)</option>
                    </select>
                </div>
            </div>
            <Products/>
            <h1 style={{
                textAlign: 'center',
                borderTop: '1px solid #ccc',
                fontSize: '24',
                padding: '20',
            }}>Newsletter</h1>
            <Newsletter/>
            <Footer/>
            <GoToTop/>
        </div>
    );
}


export default ProductList;