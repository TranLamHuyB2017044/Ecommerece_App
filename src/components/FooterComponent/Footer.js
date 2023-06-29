import styles from "./Footer.module.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
function Footer() {
  return (
    <div className={styles.Footer_container}>
      <div className={styles.footer_left}>
        <h2 className={styles.name}>CAMILE.</h2>
        <p className={styles.desc}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className={styles.socials}>
          <FacebookOutlinedIcon style={{ color: "#17aafd" }} />
          <InstagramIcon style={{ color: "#8a3ab9" }} />
          <PinterestIcon style={{ color: "#e60522" }} />
          <TwitterIcon style={{ color: "#1da1f2" }} />
          <YouTubeIcon style={{ color: "#ff0000" }} />
        </div>
      </div>
      <div className={styles.footer_center}>
        <div className={styles.linkuseful}>
          <p>Usefull Link</p>
          <ul className={styles.links}>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Sales</li>
            <li>Tickets</li>
            <li>Certifications</li>
            <li>Customer Service</li>
          </ul>
        </div>
        <div className={styles.product}>
          <p>Product</p>
          <ul className={styles.links}>
            <li>Theme Design</li>
            <li>Plugin Design</li>
            <li>Wordpress</li>
            <li>HTML Tempalte</li>
          </ul>
        </div>
        <p className={styles.copyright}>&copy; 2023 Copyright HuyCamile.com</p>
      </div>
      <div className={styles.footer_right}>
        <h3>Contact</h3>
        <div className={styles.contact}>
          <div className={styles.contact_icon}>
            <HomeOutlinedIcon />
            <EmailOutlinedIcon />
            <LocalPhoneOutlinedIcon />
          </div>
          <div className={styles.contact_info}>
            <p> 123, AB Road, CanTho, VietNam</p>
            <p> tranlamhuy5tn@gmail.com</p>
            <p> +84 12349999</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
