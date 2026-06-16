import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ItemContext } from "../../context/ItemContext";
import { Button } from "@/components/ui/button";

const Items = () => {
  const { id } = useParams<{ id: string }>();
  const context = useContext(ItemContext);
  const [purchase, setPurchase] = useState(false);
  const [variant, setVariant] = useState("");
  const [qty, setQty] = useState(1);
  const [favorited, setFavorited] = useState(false);

  const changeQty = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQty(Number(event.target.value));
  };

  const changeVariant = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setVariant(event.target.value);
  };

  if (!context || !context.items) {
    return <div>Loading...⚪️</div>;
  }

  const itemData = context.items.find((item) => item.id === id);

  if (!itemData) {
    return <div>Item not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex gap-10">
      <img
        src={itemData.img}
        alt={itemData.name}
        className="w-1/2 rounded-xl object-cover"
      />

      <div className="flex flex-col gap-4 w-1/2">
        <h1 className="text-2xl font-bold text-gray-900">{itemData.name}</h1>
        <p className="text-xl text-gray-700">${itemData.price}</p>

        <div className="flex flex-col gap-1">
          <label htmlFor="color" className="text-sm font-medium text-gray-700">
            Variant
          </label>
          <select
            id="color"
            onChange={changeVariant}
            value={variant}
            className="border rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            {itemData.variant.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            id="quantity"
            onChange={changeQty}
            value={qty}
            type="number"
            min="1"
            max={itemData.quantity}
            className="border rounded-lg px-3 py-2 text-sm w-24 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <button
          onClick={() => setFavorited((prev) => !prev)}
          className={`text-sm w-fit transition-colors ${
            favorited ? "text-pink-500 font-medium" : "text-gray-400 hover:text-pink-400"
          }`}
        >
          {favorited ? "♥ Favorited" : "♡ Add to Favourites"}
        </button>

        {!purchase ? (
          <Button onClick={() => setPurchase(true)} size="lg" className="mt-2">
            Add to Cart
          </Button>
        ) : (
          <div className="flex flex-col gap-3 mt-2">
            <p className="text-sm text-gray-600">
              Selected: {qty}x {itemData.name} — {variant}
            </p>
            <Button size="lg" asChild>
              <Link to="/buypage">Buy it Now</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;
