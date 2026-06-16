import Carouselfeature from "./components/carousel/Carouselfeature";
import MyNav from "./components/nav/Nav";
import Grid from "./components/grid/Grid";
import ItemProvider from "./context/ItemContext";
import Items from "./components/items/Items";
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
                Thank you for your purchase!
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
