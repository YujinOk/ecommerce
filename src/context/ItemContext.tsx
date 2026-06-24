import { createContext, useState, useEffect, ReactNode } from "react";
import mockItems, { Item } from "../data/mockData";

type ItemContextType = {
  items: Item[] | null;
  setItems: (items: Item[]) => void;
};

export const ItemContext = createContext<ItemContextType | null>(null);

const ItemProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    setItems(mockItems);
  }, []);

  const data = { items, setItems };

  return <ItemContext.Provider value={data}>{children}</ItemContext.Provider>;
};

export default ItemProvider;
