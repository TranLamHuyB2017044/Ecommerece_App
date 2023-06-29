import styles from "./Newsletter.module.scss";
import { NewsletterIMG } from "../../data";
function Newsletter() {
  return (
    <div className={styles.Newsletter_container}>
        <div className={styles.Newsletter_content}>
          <p>Our Lowest Prices of the Season on Specials: 20-65% off. </p>
          <a href="/#">Shop all</a>
        </div>
        <img src={NewsletterIMG} alt="summer" />      
    </div>
  );
}

export default Newsletter;
