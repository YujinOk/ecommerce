import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { useContext } from "react";
import { ItemContext } from "../../context/ItemContext";
import styles from "./Grid.module.scss";
import { Link } from "react-router-dom";
const Grid = () => {
  const { items } = useContext(ItemContext);
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center">
          {items &&
            items.map((item, index) => {
              return (
                <Col xs={2} key={index} className={styles.grid_col}>
                  <img className={styles.grid_img} src={item.img} alt="" />
                  <Link to={`/items/${item.id}`}>{item.name}</Link>
                  <p>$ {item.price}</p>
                  <p></p>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default Grid;
