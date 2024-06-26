import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function TopRatedGames({ gameList }) {
  useEffect(() => {
    // console.log(gameList);
  }, []);
  return (
    <div className="mt-5">
      <h2 className="text-[30px] font-bold text-white">Top Rated Games</h2>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-3">
        {gameList.map(
          (item, index) =>
            index < 13 &&
            item.metacritic > 93 && (
              <Link
                to={`/game/${item.id}`}
                className="bg-gray-500 rounded-lg group hover:scale-125 transition-all ease-out duration-300"
              >
                <img
                  src={item.background_image}
                  alt="Game image"
                  className="h-[250px] object-cover rounded-lg"
                />
                <h2 className="text-[15px] font-bold p-2 dark:text-white">
                  {item.name}
                </h2>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default TopRatedGames;
