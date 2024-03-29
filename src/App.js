import "bootstrap/dist/css/bootstrap.min.css";
import Carouselfeature from "./components/Carouselfeature/Carouselfeature.jsx";
import MyNav from "./components/Nav/Nav.jsx";
import Grid from "./components/Grid/Grid.jsx";
import ItemProvider from "./context/ItemContext.jsx";
import Items from "./components/Items/Items.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
const App = () => {
    return (
        <Router>
            <ItemProvider>
                <div>
                    <MyNav />
                    <Switch>
                        <Route path="/buypage">
                            <div className="thankyou">
                                Thank you for your purchase 😉 감사합니다!
                            </div>
                        </Route>
                        <Route path="/items/:id">
                            <Items />
                        </Route>
                        <Route path="/">
                            <Carouselfeature />
                            <hr className="my-1 " />
                            <Grid />
                        </Route>
                    </Switch>
                </div>
            </ItemProvider>
        </Router>
    );
};

export default App;
