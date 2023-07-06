import Announcement from '../../components/AnnouncementComponent/Announcement';
import Header from '../../components/HeaderComponent/Header';
import NavBar from '../../components/NavBarComponent/NavBar';
import Footer from '../../components/FooterComponent/Footer';
import styles from './Detail.module.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
function DetailProduct() {
    const [product, setproduct] = useState([])
    useEffect(() =>{
        const productList = async () => {
            const rs = await axios.get('http://localhost:5000/api/product/')
            setproduct(rs.data)
        }
        productList();
    }, [])
    return ( 
        <div className="Detail_Container">
            <Header/>
            <NavBar/>
            <Announcement/>
            <div className={styles.wrapper}>
                <div className={styles.image_container}>
                    <img src={product.img} alt='img-detail' />
                </div>
                <div className={styles.info}>
                    <h2 className={styles.product_name}>
                        {product.title}
                    </h2>
                    <p className={styles.description}>
                        {product.desc}
                    </p>
                    <p className={styles.price}>20$</p>
                    <div className={styles.Colors}>
                        <p style={{fontWeight:'500'}}>Color: </p>
                        <div className={styles.color} style={{
                            color: product.color,
                            backgroundColor: product.color
                        }}>a</div>
                        <div className={styles.color} style={{
                            color: 'black',
                            backgroundColor: 'black'
                        }}>a</div>
                        <div className={styles.color} style={{
                            color: '#ccc',
                            backgroundColor: '#ccc'
                        }}>a</div>
                        <div className={styles.Size}>
                            <p>Size</p>
                            <select>
                                <option selected>{product.size}</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.Quantity}>
                        <p className={styles.quantity}>Quantity: </p>
                        <p className={styles.minus}>-</p>
                        <p className={styles.number}>1</p>
                        <p className={styles.plus}>+</p>
                    </div>
                    <div className={styles.AddCart_Button}>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}

export default DetailProduct;