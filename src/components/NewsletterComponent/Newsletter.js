import styles from "./Newsletter.module.scss";
import { Link } from "react-router-dom";
import {NewsletterIMG} from '../../data'
function Newsletter() {
  return (
    <div className={styles.Newsletter_container}>
        <div className={styles.Newsletter_content}>
          <p>Our Lowest Prices of the Season on Specials: 20-65% off. </p>
          <Link to="/products">Shop all</Link>
        </div>
        
        <img src={NewsletterIMG} alt="NewsletterIMG" />
          
    </div>
  );
}

export default Newsletter;
