import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useContext } from "react";
import { ItemContext } from "../../context/ItemContext";
import styles from "./Carouselfeature.module.scss";

const Carouselfeature = () => {
    const { items, setItems } = useContext(ItemContext);
    const carouselSlides = items.map((item, index) => {
        return (
            <Carousel.Item key={index} className={styles.carousel_Container}>
                <img
                    className="d-block w-100 h-100"
                    src={item.img}
                    alt="First slide"
                />
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
