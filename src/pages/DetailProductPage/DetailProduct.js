import Header from "../../components/HeaderComponent/Header";
import Footer from "../../components/FooterComponent/Footer";
import styles from "./Detail.module.scss";
import { useEffect, useState } from "react";
import { publicRequest } from "../../request";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MyAlert from "../../components/AlertComponent/Alert";
import { addProduct } from "../../redux/cartRedux";
function DetailProduct() {
  const [product, setproduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [img, setImg] = useState("");
  const localtion = useLocation();
  const id = localtion.pathname.split("/")[2];
  const user = useSelector((state) => state.user.currentUser);
  const userId = user.data.others._id;
  const dispatch = useDispatch()
  const api = publicRequest();

  useEffect(() => {
    const productList = async () => {
      const rs = await api.get(`/product/${id}/`);
      setproduct(rs.data);
    };
    productList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    product.img?.map((item, index) => {
      if (index === 3) {
        setImg(item.url_img);
      }
      return item.url_img;
    });
  }, [product]);
  const handleClick = (type) => {
    if (type === "incr") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };
  const handleAddCart = async () => {
    if (color === "") {
      MyAlert.Toast("error", "please select a color first !");
      return false;
    } else if (size === "") {
      MyAlert.Toast("error", "please select a size first !");
      return false;
    } else {
      const productId = id
      const token = localStorage.getItem('access_token');
      const products = [{productId, quantity, size, color}]
      await api.post('/cart/', {userId, products })
      MyAlert.Alert("success", "Product added successfully");
      const rs = await api.get(`/cart/${userId}`, {headers: {token: `Bearer ${token}`}})
      dispatch(addProduct(rs.data.products))
    }
  };
  
  const handleChangeImg = (index) => {
    product.img?.map((img_item, i) => {
      if (i === index) {
        setImg(img_item.url_img);
      }
      return img_item.url_img;
    });
  };

  // add checkpoints to image
  const [checkpoints] = useState([
    {
      id: 1,
      x: 320,
      y: 467,
      info: "Đế giữa Bounce",
    },
    {
      id: 2,
      x: 500,
      y: 420,
      info: "Thân giày bằng vải lưới thoáng khí",
    },
    {
      id: 3,
      x: 240,
      y: 375,
      info: "Cổ giày lót đệm Geofit",
    },
    {
      id: 4,
      x: 380,
      y: 400,
      info: "Thân giày có chứa tối thiểu 50% thành phần tái chế",
    },
  ]);

  const [showInfo, setShowInfo] = useState(false)
  const [checkPointId, setCheckPointId] = useState(1)
  const handleShowInfo = (id) => {
    checkpoints.map((check) => {
      if(check.id === id){
        setShowInfo(!showInfo)
        setCheckPointId(check.id)
      }
      return false
    })

  };
  return (
    <div className={styles.detail_container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.image_container}>
          <img src={img} alt="img-detail" />
          {img === 'https://res.cloudinary.com/dfnwnhng8/image/upload/v1699695454/product_img/rndmlgvbgvv3dadjltn2.avif' ? checkpoints.map((checkpoint) => (
            <div 
              onClick={() => handleShowInfo(checkpoint.id)}
              style={{
                left: checkpoint.x,
                top: checkpoint.y,
                backgroundColor: showInfo && checkpoint.id === checkPointId ? "teal" : "black",
              }} 
              key={checkpoint.id} 
              className={styles.checkPoint}
              >
                <p 
                  className={styles.info}
                  style={{
                    backgroundColor: showInfo && checkpoint.id === checkPointId ? "white" : "",
                    width: '350px',
                    zIndex: showInfo && checkpoint.id === 1 ? '1' : '',
                    border: showInfo && checkpoint.id === checkPointId ? "1px solid teal" : "",
                  }}
                >{showInfo && checkpoint.id === checkPointId ? checkpoint.info : ''}</p>
            </div>
          )) : ''}
          <div className={styles.more_image}>
            {product.img?.map((img_item, index) => (
              <img
                key={index}
                style={
                  img === img_item.url_img
                    ? { border: "3px solid teal" }
                    : { border: "none" }
                }
                onClick={() => handleChangeImg(index)}
                src={img_item.url_img}
                alt="img-detail"
              />
            ))}
          </div>
        </div>
        <div className={styles.info}>
          <h2 className={styles.product_name}>{product.title}</h2>
          <p className={styles.description}>{product.desc}</p>
          <p className={styles.price}>{product.price} $</p>
          <div className={styles.Info_product}>
            <div className={styles.Colors}>
              <p>Color </p>
              <div className={styles.color_container}>
                {product.color?.map((color_item) => (
                  <button
                    key={color_item}
                    className={styles.color}
                    style={
                      color === color_item
                        ? { border: "0.5px solid teal" }
                        : { border: "none" }
                    }
                    onClick={() => {
                      setColor(color_item);
                    }}
                  >
                    {color_item}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.Size}>
              <p>Size </p>
              <div className={styles.size_container}>
                {product.size?.map((size_item) => (
                  <button
                    key={size_item}
                    className={styles.size}
                    style={
                      size === size_item
                        ? { border: "0.5px solid teal" }
                        : { border: "none" }
                    }
                    onClick={() => {
                      setSize(size_item);
                    }}
                  >
                    {size_item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.Quantity}>
            <p className={styles.quantity}>Quantity: </p>
            <p className={styles.minus} onClick={() => handleClick("desc")}>
              -
            </p>
            <p className={styles.number}>{quantity}</p>
            <p className={styles.plus} onClick={() => handleClick("incr")}>
              +
            </p>
          </div>
          <p className={styles.inStock}>{product.inStock} pieces available</p>
          <div className={styles.AddCart_Button}>
            <button onClick={handleAddCart}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailProduct;
