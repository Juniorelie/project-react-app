import React from "react";
import team from "../assets/team.png";

function AboutPage() {
  return (
    <div className="px-32 py-8 bg-gray-700">
      <div className="my-4 text-center text-white">
        <h2 className="text-[30px] mb-2 font-bold">About Everything Gaming</h2>
        <p className="w-[80%] my-0 mx-auto">
          <span className="font-bold">Everything Gaming</span> is an an
          information and reviews website for video games. We list all the games
          currently available in the market. The website then generates a
          numeric score by averaging all of the numeric reviews as well as the
          Metacritic score. Several other metrics are also available, such as
          the percentage of critics that recommend the game and its relative
          ranking across all games on Everything Gaming.
        </p>
      </div>
      <div className="my-4 text-center text-white">
        <h2 className="text-[30px] mb-2 font-bold">
          Meet our team of amazing gamers !
        </h2>
        <img src={team} alt="team image" className="w-[80%] my-0 mx-auto" />
      </div>
    </div>
  );
}

export default AboutPage;
