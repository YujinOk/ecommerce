import { Container, Row, Col } from "react-bootstrap";
import React from "react";
// import Fetch from "../../Fetch.js";
// import getItems from "../../Fetch.js";
import firesore from "../../services/firestore.js";
import { useState, useEffect } from "react";
const Grid = () => {
    const [items, setItems] = useState(null);
    useEffect(() => {
        const getItems = async () => {
            const colRef = firesore.collection("kstore");
            const snapshot = await colRef.get();
            // console.log(snapshot.docs);
            const cleaned = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            console.log(cleaned);
            setItems(cleaned);
        };
        getItems();
    }, []);
    return (
        <div>
            <Container>
                <Row>
                    {items &&
                        items.map((item, index) => {
                            return <Col key={index}>{item.id}</Col>;
                        })}
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Grid;
