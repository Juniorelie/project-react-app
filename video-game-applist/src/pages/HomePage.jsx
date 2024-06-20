import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import Banner from "../components/Banner";
import TopRatedGames from "../components/TopRatedGames";
import GamesByGenreId from "../components/GamesByGenreId";

const HomePage = () => {
  const { games, filteredGames } = useContext(GameContext);

  const getRandomGame = () => {
    const randomIndex = Math.floor(Math.random() * games.length);
    return games[randomIndex];
  };

  const randomGame = getRandomGame();

  return (
    <div className="px-32 py-8">
      <Banner gameBanner={randomGame} />
      <TopRatedGames gameList={games} />
      <GamesByGenreId gameList={filteredGames} />
    </div>
  );
};

export default HomePage;
