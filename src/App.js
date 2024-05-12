import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Search from "./Pages/Search";
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';



function App() {
  return (
    <div className="app-items">
      <BrowserRouter>
        <Navbar />    
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/bears" element={<ShopCategory cat="Bears" />}/> 
          <Route path="/seasonal" element={<ShopCategory cat="Seasonal" />}/> 
          <Route path="/notbearsland" element={<ShopCategory cat="Not Bears (Land)" />}/> 
          <Route path="/notbearssea" element={<ShopCategory cat="Not Bears (Sea)" />}/> 
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}/>
          </Route>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<LoginSignup />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
