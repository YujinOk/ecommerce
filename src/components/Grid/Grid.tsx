import { useContext } from "react";
import { ItemContext } from "../../context/ItemContext";
import { Link } from "react-router-dom";

const Grid = () => {
  const context = useContext(ItemContext);

  if (!context || !context.items) {
    return <div>Loading...⚪️</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {context.items.map((item) => (
          <Link
            to={`/items/${item.id}`}
            key={item.id}
            className="group border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full aspect-video object-cover"
            />
            <div className="p-4">
              <p className="font-medium text-gray-900 group-hover:underline">{item.name}</p>
              <p className="text-gray-500 text-sm mt-1">${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Grid;
