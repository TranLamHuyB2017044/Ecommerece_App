import { useEffect, useState } from "react";
import Categories from "../components/CategoriesComponent/Categories";
import Footer from "../components/FooterComponent/Footer";
import Newsletter from "../components/NewsletterComponent/Newsletter";
import Products from "../components/ProductsComponent/Products";
import Slider from "../components/SliderComponent/Slider";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Header from "../components/HeaderComponent/Header";

import Announcement from "../components/AnnouncementComponent/Announcement";
import NavBar from "../components/NavBarComponent/NavBar";
function Home() {
    const [goToTop, setGoToTop] = useState(false)
    useEffect(() => {
        const handleScroll = () =>{
            setGoToTop( window.scrollY > 200)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return ( 
        <div className="home_content">
            <Announcement/>
            <Header />
            <NavBar/>
            <Slider/>
            <h1 style={{textAlign: 'center'}}>Get Inspire</h1>
            <Categories/>
            <h1 style={{textAlign: 'center'}}>Popular Products</h1>
            <Products/>
            <h1 style={{
                textAlign: 'center',
                borderTop: '1px solid #ccc',
                fontSize: '24',
                padding: '20',
            }}>Newsletter</h1>
            <Newsletter/>
            <Footer/>
            {goToTop && 
                <div 
                style={{
                    backgroundColor: 'pink',
                    borderRadius: '10px',
                    padding: '10px',
                    position: 'fixed',
                    right : '20px',
                    bottom : '20px',
                    width: '60px',
                    height: '60px',
                    cursor: 'pointer',
                    zIndex: '13'
                }}
                onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}
                >
                    <KeyboardArrowUpOutlinedIcon 
                        style={{
                            width: '40px',
                            height: '40px',
                        }}
                    />
                </div>
            }
        </div>
    );
}


export default Home;