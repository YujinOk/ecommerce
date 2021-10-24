import firesore from "./services/firestore.js";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carouselfeature from "./components/Carouselfeature/Carouselfeature.jsx";
import MyNav from "./components/Nav/Nav.jsx";
import Grid from "./components/Grid/Grid.jsx";
import ItemProvider from "./context/ItemContext.jsx";
import Items from "./components/Items/Items.jsx";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const App = () => {
    return (
        <Router>
            <ItemProvider>
                <div>
                    <MyNav />
                    <Switch>
                        <Route path="/items/:id">
                            <Items />
                        </Route>
                        <Route path="/">
                            <Carouselfeature />
                            <Grid />
                        </Route>
                    </Switch>
                </div>
            </ItemProvider>
        </Router>
    );
};

export default App;
