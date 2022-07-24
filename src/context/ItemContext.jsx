import { createContext, useState, useEffect } from "react";
import firesore from "../services/firestore.js";

export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    const getItems = async () => {
      const colRef = firesore.collection("kstore");
      const snapshot = await colRef.get();
      const cleaned = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(cleaned);
    };
    getItems();
  }, []);

  const data = { items, setItems };

  return <ItemContext.Provider value={data}>{children}</ItemContext.Provider>;
};

export default ItemProvider;
