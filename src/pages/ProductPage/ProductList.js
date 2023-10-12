import Footer from "../../components/FooterComponent/Footer";
import Header from "../../components/HeaderComponent/Header";
import Products from "../../components/ProductsComponent/Products";
import Newsletter from "../../components/NewsletterComponent/Newsletter";
import styles from './ProductList.module.scss'
import GoToTop from "../../components/GoToTopComponent/GoToTop";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function ProductList() {
    const location = useLocation()
    const category = location.search
    const [filters, setFliter] = useState({})
    const [sort, setSort] = useState("newest")
    const handleFilter = (e) => {
        const value = e.target.value
        setFliter({
            ...filters,
            [e.target.name]: value
        })
    }
    return ( 
        <div className={styles.ProductList_container}>
            <Header/>
            <div className={styles.Filters_container}>
                <div className={styles.filter_left}>
                    <p>Filter Product: </p>
                    <select name="color" onChange={handleFilter}>
                        <option defaultChecked >Color</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Black</option>
                        <option>Pink</option>
                        <option>Gray</option>
                        <option>Yellow</option>
                    </select>
                    <select name="size" onChange={handleFilter}>
                        <option defaultChecked >Size</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>
                <div className={styles.filter_right}>
                    <p>Sort Product: </p>
                    <select onChange={(e) => setSort(e.target.value)}>
                        <option value="newest">Newest</option>
                        <option value="asc">Price (Asc)</option>
                        <option value="desc">Price (Desc)</option>
                    </select>
                </div>
            </div>
            <Products cat ={category} filters = {filters} sort = {sort}/>
            <h1 style={{
                textAlign: 'center',
                borderTop: '1px solid #ccc',
                fontSize: '24',
                padding: '20',
                marginBottom:'2rem'
            }}>Newsletter</h1>
            <Newsletter/>
            <Footer/>
            <GoToTop/>
        </div>
    );
}


export default ProductList;