import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ItemContext } from "../../context/ItemContext";
const Items = () => {
    const { id } = useParams();
    console.log(id);
    const { items, setItems } = useContext(ItemContext);

    const itemData = items.filter((item) => {
        return id === item.id;
    });

    console.log(itemData);
    const handleClick = () => {
        itemData[0].favorited = false;
    };
    return (
        <div>
            <img src={itemData[0].img} />
            <p>Name: {itemData[0].name}</p>
            <p>Price:{itemData[0].price}</p>
            <p>Quantity:{itemData[0].quantity}</p>
            <label for="color">Choose a color:</label>

            <select name="color" id="color">
                <option>Black</option>
                <option>White</option>
                <option>Red</option>
                <option>Hot Pink</option>
            </select>
            <p>{itemData[0].favorited && <span> *Favorited</span>}</p>
            <button onClick={handleClick}>Favorited</button>
        </div>
    );
};

export default Items;
