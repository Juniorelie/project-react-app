import React from "react";

function AboutPage() {
  return(
    <div className="px-32 py-8">
      <div className="my-4 text-center">
      <h2 className="text-[30px] mb-2 font-bold">About Everything Gaming</h2>
      <p className="w-[80%] my-0 mx-auto">
        <span className="font-bold">Everything Gaming</span> is an an information and reviews website for video games. We list all the games currently available in the market. 
        The website then generates a numeric score by averaging all of the numeric reviews as well as the Metacritic score. 
        Several other metrics are also available, such as the percentage of critics that recommend the game and its relative ranking across all games on Everything Gaming.
      </p>
    </div>
    </div>
  );
}

export default AboutPage;
