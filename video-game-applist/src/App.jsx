import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameInfoPage from "./pages/GameInfoPage";
import AboutPage from "./pages/AboutPage";
import WishListPage from "./pages/WishListPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:id" element={<GameInfoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
