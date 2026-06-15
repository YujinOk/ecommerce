import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { ItemContext } from "../../context/ItemContext";
import styles from "./Grid.module.scss";
import { Link } from "react-router-dom";

const Grid = () => {
  const context = useContext(ItemContext);

  if (!context || !context.items) {
    return <div>Loading...⚪️</div>;
  }

  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center">
          {context.items.map((item, index) => (
            <Col xs={2} key={index} className={styles.grid_col}>
              <img className={styles.grid_img} src={item.img} alt={item.name} />
              <Link to={`/items/${item.id}`}>{item.name}</Link>
              <p>$ {item.price}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Grid;
