import Carousel from "react-bootstrap/Carousel";
import { useContext } from "react";
import { ItemContext } from "../../context/ItemContext";
import styles from "./Carouselfeature.module.scss";

const Carouselfeature = () => {
  const context = useContext(ItemContext);

  if (!context || !context.items) {
    return <div>Loading...⚪️</div>;
  }

  const carouselSlides = context.items.map((item, index) => {
    return (
      <Carousel.Item key={index} className={styles.carousel_Container}>
        <img className={styles.img} src={item.img} alt={item.name} />
        <Carousel.Caption>
          <h3>{item.name}</h3>
          <h4>{item.sale}% SALE!!!</h4>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <div>
      <Carousel fade>{carouselSlides}</Carousel>
    </div>
  );
};

export default Carouselfeature;
