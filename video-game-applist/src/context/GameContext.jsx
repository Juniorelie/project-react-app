import React, { createContext, useState, useEffect } from "react";
import {
  addToWishlist,
  deleteGame,
  fetchGames,
  getGameDetails,
  fetchWishlist,
  deleteFromWishlist,
  addReview,
  deleteReview,
  updateReview,
  fetchReviews,
} from "../api";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadGames = async () => {
      const initialGames = await fetchGames();
      setGames(initialGames);
    };
    loadGames();
  }, []);

  useEffect(() => {
    const loadWishlist = async () => {
      const initialWishlist = await fetchWishlist();
      setWishlist(initialWishlist);
    };
    loadWishlist();
  }, []);

  const handleAddToWishlist = async (game) => {
    const isAlreadyInWishlist = wishlist.some((item) => item.id === game.id);
    if (isAlreadyInWishlist) {
      console.log("Game is already in the wishlist");
      return;
    }
    await addToWishlist(game);
    const updatedWishlist = await fetchWishlist();
    setWishlist(updatedWishlist);
  };

  const handleDeleteGame = async (id) => {
    await deleteGame(id);
    setGames(games.filter((game) => game.id !== id));
  };

  const handleDeleteFromWishlist = async (id) => {
    const isInWishlist = wishlist.some((item) => item.id === id);
    if (!isInWishlist) {
      console.log("Game not found in the wishlist");
      return;
    }
    try {
      await deleteFromWishlist(id);
      const updatedWishlist = await fetchWishlist();
      setWishlist(updatedWishlist);
    } catch (error) {
      console.error("Failed to delete the item from the wishlist:", error);
    }
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleAddReview = async (review) => {
    await addReview(review);
    const updatedGame = await getGameDetails(review.gameId);
    setGames(
      games.map((game) =>
        game.id === review.gameId
          ? { ...game, reviews: updatedGame.reviews }
          : game
      )
    );
  };

  const handleDeleteReview = async (reviewId) => {
    await deleteReview(reviewId);
    const updatedGame = await getGameDetails(reviewId);
    setGames(
      games.map((game) =>
        game.id === reviewId ? { ...game, reviews: updatedGame.reviews } : game
      )
    );
  };

  const handleUpdateReview = async (reviewId, updatedReview) => {
    await updateReview(reviewId, updatedReview);
    const updatedGame = await getGameDetails(reviewId);
    setGames(
      games.map((game) =>
        game.id === reviewId ? { ...game, reviews: updatedGame.reviews } : game
      )
    );
  };

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <GameContext.Provider
      value={{
        games,
        wishlist,
        getGameDetails,
        addGame: (game) => setGames([...games, game]),
        deleteGame: handleDeleteGame,
        addToWishlist: handleAddToWishlist,
        deleteFromWishlist: handleDeleteFromWishlist,
        searchTerm,
        setSearchTerm: handleSearchChange,
        filteredGames,
        addReview: handleAddReview,
        deleteReview: handleDeleteReview,
        updateReview: handleUpdateReview,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
