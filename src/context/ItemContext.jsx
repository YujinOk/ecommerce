import { createContext, useState, useEffect } from "react";
import mockItems from "../data/mockData.js";

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(mockItems);
  }, []);

  const data = { items, setItems };

  return <ItemContext.Provider value={data}>{children}</ItemContext.Provider>;
};

export default ItemProvider;
