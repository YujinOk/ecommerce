import firesore from "./services/firestore.js";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carouselfeature from "./components/Carouselfeature/Carouselfeature.jsx";
import MyNav from "./components/Nav/Nav.jsx";
import Grid from "./components/Grid/Grid.jsx";
import ItemProvider from "./context/ItemContext.jsx";

const App = () => {
    return (
        <ItemProvider>
            <div>
                <MyNav />
                <Carouselfeature />
                <Grid />
            </div>
        </ItemProvider>
    );
};

export default App;
