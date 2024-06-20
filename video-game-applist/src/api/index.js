const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://game-applist-backend.onrender.com";

// Fetch game details by ID
export const getGameDetails = async (id) => {
  const response = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
  );
  const data = await response.json();
  const reviews = await fetchReviews(id);
  return { ...data, reviews };
};

// Fetch all games
export const fetchGames = async () => {
  const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// Add a new game
export const addGame = async (game) => {
  return game;
};

// Delete a game by Id
export const deleteGame = async (id) => {
  return id;
};

// Fetch the wishlist
export const fetchWishlist = async () => {
  const response = await fetch(`${API_URL}/wishlists`);
  const data = await response.json();
  return data;
};

// Add a game to the wishlist
export const addToWishlist = async (game) => {
  const response = await fetch(`${API_URL}/wishlists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  });
  const data = await response.json();
  return data;
};

// Delete a game from the wishlist
export const deleteFromWishlist = async (id) => {
  const response = await fetch(`${API_URL}/wishlists/${id}`, {
    method: "DELETE",
  });
  if (response.status === 404) {
    throw new Error(`Item with ID ${id} not found`);
  }
  const data = await response.json();
  return data;
};

// Add a review
export const addReview = async (review) => {
  const response = await fetch(`${API_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  const data = await response.json();
  return data;
};

// Delete a review
export const deleteReview = async (id) => {
  const response = await fetch(`${API_URL}/reviews/${id}`, {
    method: "DELETE",
  });
  if (response.status === 404) {
    throw new Error(`Review with ID ${id} not found`);
  }
  const data = await response.json();
  return data;
};

// Update a review
export const updateReview = async (id, updatedReview) => {
  const response = await fetch(`${API_URL}/reviews/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedReview),
  });
  const data = await response.json();
  return data;
};

// Fetch reviews for a game
export const fetchReviews = async (gameId) => {
  const response = await fetch(`${API_URL}/reviews?gameId=${gameId}`);
  const data = await response.json();
  return data;
};
