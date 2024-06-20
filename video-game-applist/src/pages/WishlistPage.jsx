import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

const WishListPage = () => {
  const { wishlist, deleteFromWishlist } = useContext(GameContext);

  // console.log(wishlist);

  return (
    <div className="px-32 py-8">
      <h1 className="py-5 text-3xl font-bold text-white">Your Wishlist</h1>
      <div className="grid grid-cols-3 gap-8">
        {wishlist.map((game) => (
          <div
            key={game.id}
            className="w-full relative space-y-4 bg-cyan-100 pt-4 rounded-xl"
          >
            <button
              className="absolute top-4 right-4 border border-red-500 px-5 py-2.5 rounded-lg font-semibold hover:bg-red-700 hover:text-white transition-all ease-out duration-500"
              onClick={() => deleteFromWishlist(game.id)}
            >
              Remove
            </button>
            <h2 className="pl-2 text-lg font-semibold">{game.name}</h2>
            <img
              className="w-full h-80 rounded-xl"
              src={game.background_image}
              alt={game.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishListPage;
