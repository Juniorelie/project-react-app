import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import globalApi from "../API/globalApi";
import Banner from "../components/Banner";
import TopRatedGames from "../components/TopRatedGames";
import GamesByGenreId from "../components/GamesByGenreId";

function Home() {
  const [allGamesList, setAllGamesList] = useState();
  const [gameListByGenre, setGameListByGenre] = useState([]);
  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId(4);
  }, []);

  const getAllGamesList = () => {
    globalApi.getGameList.then((resp) => {
      // console.log(resp.data.results)
      setAllGamesList(resp.data.results);
      // setGameListByGenre(resp.data.results);
    });
  };

  const getGameListByGenreId = (id) => {
    globalApi.getGameListByGenreId(id).then((resp) => {
      // console.log("Game List:", resp.data.results);
      setGameListByGenre(resp.data.results);
    });
    console.log("Genre_Id :", id);
  };

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList
          setGenreId={(setGenreId) => getGameListByGenreId(setGenreId)}
        />
      </div>
      <div className="col-span-4 md:col-span-3 h-full text-white dark:text-black ml-1">
        {allGamesList?.length > 0 && gameListByGenre.length > 0 ? (
          <div>
            <Banner gameBanner={allGamesList[Math.floor(Math.random() * 11)]} />
            <TopRatedGames gameList={allGamesList} />
            <GamesByGenreId gameList={gameListByGenre} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
