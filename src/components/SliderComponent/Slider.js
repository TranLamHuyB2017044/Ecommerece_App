import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { sliderItems } from "../../data";
import styles from "./Slider.module.scss";
import { useState } from "react";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = () => {
    setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    
  };
  return (
    <div className={styles.slider_container}>
      <div 
        className={styles.wrapper}
        style={{ transform:  `translateX(${slideIndex * -100}vw)`}}
      >
        {sliderItems.map((item) => (
          <div  key={item.id} className={styles.slider_content} style={{backgroundColor: item.bg}}>
            <div className={styles.slider_image} >
              <img src={item.img} alt={item.img} />
            </div>
            <div className={styles.slider_info}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.desc}>{item.desc}</p>
              <button>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.arrow_right} onClick={() => handleClick()}>
        <ArrowForwardIosOutlinedIcon />
      </div>
    </div>
  );
}

export default Slider;
