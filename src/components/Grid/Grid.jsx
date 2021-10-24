import { Container, Row, Col } from "react-bootstrap";
import React from "react";
// import Fetch from "../../Fetch.js";
// import getItems from "../../Fetch.js";
import firesore from "../../services/firestore.js";
import { useState, useEffect, useContext } from "react";
import { ItemContext } from "../../context/ItemContext";
import styles from "./Grid.module.scss";
import { Link } from "react-router-dom";
const Grid = () => {
    const { items, setItems } = useContext(ItemContext);
    // const [items, setItems] = useState(null);
    // useEffect(() => {
    //     const getItems = async () => {
    //         const colRef = firesore.collection("kstore");
    //         const snapshot = await colRef.get();
    //         // console.log(snapshot.docs);
    //         const cleaned = snapshot.docs.map((doc) => {
    //             return { id: doc.id, ...doc.data() };
    //         });
    //         console.log(cleaned);
    //         setItems(cleaned);
    //     };
    //     getItems();
    // }, []);
    return (
        <div>
            <Container>
                <Row>
                    {items &&
                        items.map((item, index) => {
                            return (
                                <Col key={index}>
                                    <img
                                        className={styles.grid_img}
                                        src={item.img}
                                    />
                                    <p>{item.name}</p>
                                    <p>$ {item.price}</p>
                                    <p>
                                        <Link to={`/items/${item.id}`}>
                                            To product page
                                        </Link>
                                    </p>
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </div>
    );
};

export default Grid;
