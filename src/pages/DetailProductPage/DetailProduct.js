import Announcement from '../../components/AnnouncementComponent/Announcement';
import Header from '../../components/HeaderComponent/Header';
import NavBar from '../../components/NavBarComponent/NavBar';
import Footer from '../../components/FooterComponent/Footer';
import styles from './Detail.module.scss'
import { useEffect, useState } from 'react';
import {publicRequest} from '../../request'
import { useLocation } from 'react-router-dom';
function DetailProduct() {
    const [product, setproduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const localtion  = useLocation()
    const id = localtion.pathname.split('/')[2]
    useEffect(() =>{
        const productList = async () => {
            const rs = await publicRequest.get(`/product/${id}/`)
            setproduct(rs.data)
        }
        productList();
    }, [id])
    const handlePlus = () => {
        setQuantity(prev => prev+1)
    }
    const handleMinus = () => {
        if(quantity > 1){
            setQuantity(prev => prev-1)
        }
    }
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
                                {product.size?.map((size, index) => (
                                    <option value={size} key={index}>{size}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={styles.Quantity}>
                        <p className={styles.quantity}>Quantity: </p>
                        <p className={styles.minus} onClick={handleMinus}>-</p>
                        <p className={styles.number}>{quantity}</p>
                        <p className={styles.plus} onClick={handlePlus}>+</p>
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