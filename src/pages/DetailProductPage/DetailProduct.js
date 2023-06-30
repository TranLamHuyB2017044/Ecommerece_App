import Announcement from '../../components/AnnouncementComponent/Announcement';
import Header from '../../components/HeaderComponent/Header';
import NavBar from '../../components/NavBarComponent/NavBar';
import Footer from '../../components/FooterComponent/Footer';
import styles from './Detail.module.scss'
function DetailProduct() {
    return ( 
        <div className="Detail_Container">
            <Header/>
            <NavBar/>
            <Announcement/>
            <div className={styles.wrapper}>
                <div className={styles.image_container}>
                    <img src='https://www.cuyana.com/dw/image/v2/BDQQ_PRD/on/demandware.static/-/Sites-master-catalog-cuyana/default/dwcd186d6f/images/2023_4April/gathered-linen-dress/PDP_1080x1350_SU23_LinenGatheredBackDress_Navy_6727.jpg?sw=1280&sh=1920' alt='img-detail' />
                </div>
                <div className={styles.info}>
                    <h2 className={styles.product_name}>
                        Sensual silhouettes in lightweight linen
                    </h2>
                    <p className={styles.description}>
                        There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don’t look even slightly believable.
                    </p>
                    <p className={styles.price}>20$</p>
                    <div className={styles.Colors}>
                        <p style={{fontWeight:'500'}}>Color: </p>
                        <div className={styles.color} style={{
                            color: 'navy',
                            backgroundColor: 'navy'
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
                                <option selected>XS</option>
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