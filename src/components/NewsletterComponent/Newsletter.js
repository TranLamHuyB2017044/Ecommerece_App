import styles from "./Newsletter.module.scss";
import { NewsletterIMG } from "../../data";
import { Link } from "react-router-dom";
function Newsletter() {
  return (
    <div className={styles.Newsletter_container}>
        <div className={styles.Newsletter_content}>
          <p>Our Lowest Prices of the Season on Specials: 20-65% off. </p>
          <Link to="/products">Shop all</Link>
        </div>
        <img src={NewsletterIMG} alt="summer" />      
    </div>
  );
}

export default Newsletter;
