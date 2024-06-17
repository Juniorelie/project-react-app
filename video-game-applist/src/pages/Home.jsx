import React from "react";
import GenreList from "../components/GenreList";

function Home() {
  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3 bg-blue-500 h-full">
        Game List
      </div>
    </div>
  );
}

export default Home;