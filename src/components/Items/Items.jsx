import React from "react";
import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ItemContext } from "../../context/ItemContext";
import styles from "./Items.module.scss";
import { Button } from "react-bootstrap";

const Items = () => {
  const { id } = useParams();
  const { items } = useContext(ItemContext);
  const [purchase, setPurchase] = useState(false);
  const [variant, setVariant] = useState("");
  const [qty, setQty] = useState(1);

  const changeQty = (event) => {
    setQty(event.target.value);
  };
  const changeVariant = (event) => {
    setVariant(event.target.value);
  };
  const addCartBtnClicker = () => {
    setPurchase(true);
  };

  if (!items) {
    return <div>Loading...⚪️ </div>;
  }

  const itemData = items.filter((item) => {
    return id === item.id;
  });

  const variantSelect = itemData[0].variant.map((item) => {
    return <option value={item}>{item}</option>;
  });

  const handleClick = (event) => {
    event.target.classList.toggle(styles.favorited);
    if (event.target.innerText === "Favorited") {
      event.target.innerText = "Not Favorited";
    } else {
      event.target.innerText = "Favorited";
    }
  };
  return (
    <div className={styles.item_container}>
      <img className={styles.img} src={itemData[0].img} />
      <div className={styles.item_sm_container}>
        <p>
          <span>Name: </span>
          {itemData[0].name}
        </p>
        <p>
          <span>Price: </span>${itemData[0].price}
        </p>
        <label for="quantity">Quantity:</label>
        <input
          onChange={changeQty}
          value={qty}
          type="number"
          min="0"
          max={itemData[0].quantity}
        />
        <label for="color"> Choose Variant</label>
        <select
          onChange={changeVariant}
          value={variant}
          name="quantity"
          id="color"
        >
          {variantSelect}
        </select>
        <p className="my-4">
          {!itemData[0].favorited && (
            <button onClick={handleClick}>Favorite</button>
          )}
        </p>
        {!purchase ? (
          <Button onClick={addCartBtnClicker} size="lg" variant="dark">
            {" "}
            Add to Cart
          </Button>
        ) : (
          <div>
            <p>You have selected: </p>
            <p>
              {qty}, {itemData[0].name} {variant}
            </p>
            <Button size="lg" variant="dark">
              <Link to="/buypage">Buy it Now!!!</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;
