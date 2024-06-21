import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import gamelogo from "../assets/2b_logo.png";

const Header = () => {
  const { setSearchTerm, searchTerm, wishlist } = useContext(GameContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
  };

  return (
    <header className="sticky top-0 z-50 px-32 bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img src={gamelogo} alt="Logo" className="w-10 h-10 mr-2" />
        <span className="text-xl font-bold">Everything Gaming</span>
      </Link>

      <nav className="flex items-center space-x-4">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-400">
          About Us
        </Link>
        <Link to="/wishlist" className="hover:text-gray-400">
          Wishlist ({wishlist && wishlist.length})
        </Link>
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center pl-8 space-x-2"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search games"
            className="p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
