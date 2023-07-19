import Categories from "../components/CategoriesComponent/Categories";
import Footer from "../components/FooterComponent/Footer";
import Newsletter from "../components/NewsletterComponent/Newsletter";
import PopularProducts from "../components/PopularProductsComponent/PopularProducts";
import Slider from "../components/SliderComponent/Slider";
import Header from "../components/HeaderComponent/Header";
import Announcement from "../components/AnnouncementComponent/Announcement";
import NavBar from "../components/NavBarComponent/NavBar";
import GoToTop from "../components/GoToTopComponent/GoToTop";
function Home() {

    return ( 
        <div className="home_content">
            <Announcement/>
            <Header />
            <NavBar/>
            <Slider/>
            <h1 style={{textAlign: 'center', marginTop: '10px'}}>Get Inspire</h1>
            <Categories/>
            <h1 style={{textAlign: 'center'}}>Popular Products</h1>
            <PopularProducts/>
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


export default Home;