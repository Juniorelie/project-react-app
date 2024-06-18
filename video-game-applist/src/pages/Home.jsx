import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import globalApi from "../API/globalApi";
import Banner from "../components/Banner";

function Home() {
  const [allGamesList, setAllGamesList] = useState();
  useEffect(() => {
    getAllGamesList();
  }, [])

  const getAllGamesList = () => {
    globalApi.getGameList.then((resp) => {
      // console.log(resp.data.results)
      setAllGamesList(resp.data.results)
    })
  }
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3 h-full text-white dark:text-black">
        {allGamesList?.length > 0 ? <Banner gameBanner={allGamesList[Math.floor(Math.random() * 11)]} /> : null}
      </div>
    </div>
  );
}

export default Home;
