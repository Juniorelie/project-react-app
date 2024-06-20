import React from "react";
import { Link } from "react-router-dom";
import wasted from "../assets/wasted.gif"

const ErrorPage = () => {
  return (
    <div className="h-[calc(100vh-72px)] flex flex-col items-center justify-center bg-gray-900 text-white">
      <img src={wasted} width={1000} height={500}/>
      <p className="text-red-700 my-6 text-[30px] font-bold hover:scale-110 transition-all ease-in duration-200">
        Game Over !
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all ease-in duration-200"
      >
        Try Again...
      </Link>
    </div>
  );
};

export default ErrorPage;
