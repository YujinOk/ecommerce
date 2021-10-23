import firesore from "./services/firestore.js";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carouselfeature from "./components/Carouselfeature/Carouselfeature.jsx";
import MyNav from "./components/Nav/Nav.jsx";
import Grid from "./components/Grid/Grid.jsx";

const App = () => {
    return (
        <div>
            <MyNav />
            <Carouselfeature />
            <Grid />
        </div>
    );
};

export default App;
