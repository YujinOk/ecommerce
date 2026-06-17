import Carouselfeature from "./components/carousel/Carouselfeature";
import MyNav from "./components/nav/Nav";
import Grid from "./components/grid/Grid";
import Footer from "./components/footer/Footer";
import ItemProvider from "./context/ItemContext";
import CartProvider from "./context/CartContext";
import Items from "./components/items/Items";
import Cart from "./components/cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <ItemProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <MyNav />
            <main className="flex-1">
              <Routes>
                <Route path="/items/:id" element={<Items />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/" element={
                  <>
                    <Carouselfeature />
                    <hr className="my-1" />
                    <Grid />
                  </>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </ItemProvider>
    </Router>
  );
};

export default App;
