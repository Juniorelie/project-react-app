import React, { useEffect } from "react";

function GamesByGenreId({ gameList }) {
  useEffect(() => {
    console.log("Game List:", gameList);
  }, []);
  return (
    <div>
      <h2 className="font-bold text-[30px] mt-5">
        Learn More about the games !
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        {gameList.map((item) => (
          <div className="bg-gray-500 pb-24 mb-4 rounded-lg hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer">
            <img
              src={item.background_image}
              alt="Game Image"
              className="w-full h-[80%] rounded-lg object-cover"
            />
            <h2 className="px-1 font-bold">
              {item.name} -{" "}
              <span className="rounded-sm bg-green-200 text-green-700 px-1">
                {item.metacritic}
              </span>{" "}
              <span>
                "
                {item.ratings[0].title[0].toUpperCase() +
                  item.ratings[0].title.slice(1)}
                "
              </span>
            </h2>
            <p className="px-1 font-semibold">
              <span>Released in: {item.released}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenreId;