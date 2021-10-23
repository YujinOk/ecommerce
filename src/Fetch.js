import React from "react";
import firesore from "./services/firestore.js";
import { useState, useEffect } from "react";
const Fetch = () => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const getItems = async () => {
            const colRef = firesore.collection("kstore");
            const snapshot = await colRef.get();
            // console.log(snapshot.docs);
            const cleaned = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            console.log(cleaned);
            setItems(cleaned);
        };
        getItems();
    }, []);

    return (
        <div className="App">
            {items &&
                items.map((item, index) => (
                    <div>
                        <div>
                            <p key={index}>{item.id}</p>
                        </div>
                        <div>
                            <p>{item.color}</p>
                        </div>
                        <div>
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <p>{item.img}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Fetch;
