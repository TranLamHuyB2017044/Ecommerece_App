import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { sliderItems } from "../../data";
import styles from "./Slider.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Shoes from "../Shoes";
function Slider() {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (type) => {
		if (type === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};
	return (
		<div className={styles.slider_container}>
			<div className={styles.arrow_left} onClick={() => handleClick("left")}>
				<ArrowBackIosOutlinedIcon />
			</div>
			<div
				className={styles.wrapper}
				style={{ transform: `translateX(${slideIndex * -100}vw)` }}
			>
				{sliderItems.map((item) => (
					<div
						key={item.id}
						className={styles.slider_content}
						style={{ backgroundColor: item.bg }}
					>
						<div className={styles.slider_image}>
						<Canvas>
							<Shoes />
							<OrbitControls  autoRotate/>
						</Canvas>
							<img src={item.img} alt={item.img} />
						</div>
						<div className={styles.slider_info}>
							<h2 className={styles.title}>{item.title}</h2>
							<p className={styles.desc}>{item.desc}</p>
							<Link to="/products" className={styles.Link}>
								<button class={styles.cta}>
									<span class={styles.hover_underline_animation}> Shop now </span>
									<svg
										viewBox="0 0 46 16"
										height="10"
										width="30"
										xmlns="http://www.w3.org/2000/svg"
										id="arrow-horizontal"
									>
										<path
											transform="translate(30)"
											d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
											data-name="Path 10"
											id="Path_10"
										></path>
									</svg>
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
			<div className={styles.arrow_right} onClick={() => handleClick("right")}>
				<ArrowForwardIosOutlinedIcon />
			</div>
		</div>
	);
}

export default Slider;
