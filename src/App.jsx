import "bootstrap/dist/css/bootstrap.min.css";
import Carouselfeature from "./components/Carouselfeature/Carouselfeature.jsx";
import MyNav from "./components/Nav/Nav.jsx";
import Grid from "./components/Grid/Grid.jsx";
import ItemProvider from "./context/ItemContext.jsx";
import Items from "./components/Items/Items.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
const App = () => {
    return (
        <Router>
            <ItemProvider>
                <div>
                    <MyNav />
                    <Routes>
                        <Route path="/buypage" element={
                            <div className="thankyou">
                                Thank you for your purchase 😉 감사합니다!
                            </div>
                        } />
                        <Route path="/items/:id" element={<Items />} />
                        <Route path="/" element={
                            <>
                                <Carouselfeature />
                                <hr className="my-1" />
                                <Grid />
                            </>
                        } />
                    </Routes>
                </div>
            </ItemProvider>
        </Router>
    );
};

export default App;
