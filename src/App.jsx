import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Home } from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import { DetailPage } from "./pages/detail-page/deatil-page";
import { ShoppingPage } from "./pages/shopping/shopping-page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Checkout from "./pages/chekout/chekout-page";
import Card from "./pages/Card/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/shop/:id" element={<DetailPage />} />
        <Route path="/shop" element={<ShoppingPage />} />
        <Route path="/cart" element={<Card />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
