import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ItemContext } from "../../context/ItemContext";
import styles from "./Items.module.scss";
import { Button } from "react-bootstrap";

const Items = () => {
  const { id } = useParams<{ id: string }>();
  const context = useContext(ItemContext);
  const [purchase, setPurchase] = useState(false);
  const [variant, setVariant] = useState("");
  const [qty, setQty] = useState(1);

  const changeQty = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQty(Number(event.target.value));
  };

  const changeVariant = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setVariant(event.target.value);
  };

  const addCartBtnClicker = () => {
    setPurchase(true);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const btn = event.currentTarget;
    btn.classList.toggle(styles.favorited);
    btn.innerText = btn.innerText === "Favorited" ? "Not Favorited" : "Favorited";
  };

  if (!context || !context.items) {
    return <div>Loading...⚪️</div>;
  }

  const itemData = context.items.find((item) => item.id === id);

  if (!itemData) {
    return <div>Item not found.</div>;
  }

  return (
    <div className={styles.item_container}>
      <img className={styles.img} src={itemData.img} alt={itemData.name} />
      <div className={styles.item_sm_container}>
        <p>
          <span>Name: </span>
          {itemData.name}
        </p>
        <p>
          <span>Price: </span>${itemData.price}
        </p>
        <label htmlFor="quantity">Quantity:</label>
        <input
          onChange={changeQty}
          value={qty}
          type="number"
          min="0"
          max={itemData.quantity}
          id="quantity"
        />
        <label htmlFor="color">Choose Variant</label>
        <select onChange={changeVariant} value={variant} id="color">
          {itemData.variant.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
        <p className="my-4">
          {!itemData.favorited && (
            <button onClick={handleClick}>Favorite</button>
          )}
        </p>
        {!purchase ? (
          <Button onClick={addCartBtnClicker} size="lg" variant="dark">
            Add to Cart
          </Button>
        ) : (
          <div>
            <p>You have selected:</p>
            <p>
              {qty}, {itemData.name} {variant}
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
