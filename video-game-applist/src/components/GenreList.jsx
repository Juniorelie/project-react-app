import React, { useEffect, useState } from "react";
import globalApi from "../API/globalApi";

function GenreList() {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    getGenreList();
  }, []);
  const getGenreList = () => {
    globalApi.getGenreList.then((res) => {
      // console.log(res.data.results);
      setGenreList(res.data.results);
    });
  };
  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-black">Genres</h2>
      {genreList.map((item, index) => {
        return (
          <div
            key={item}
            className={`flex gap-2 items-center mb-2 cursor-pointer group
            hover:bg-gray-700 p-2 rounded-md hover:dark:bg-gray-300
            ${activeIndex == index ? "bg-gray-700 dark:bg-gray-300" : null}`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={item.image_background}
              className={`w-[40px] h-[40px] object-cover rounded-lg 
                group-hover:scale-125 transition-all ease-out duration-200 ${
                  activeIndex == index ? "scale-125" : null
                }`}
            />
            <h3
              className={`dark:text-black 
                group-hover:font-bold transition-all ease-out duration-200 ${
                  activeIndex == index ? "font-bold" : null
                }`}
            >
              {item.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default GenreList;
