import React from "react";
import logo from "../assets/2b_logo.png";
import { useState, useEffect, useContext } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import { HiOutlineSun } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme", theme);
  }, []);

  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />
      <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full item-center">
        <HiOutlineSearch className="text-[25px]" />
        <input
          type="text"
          placeholder="Search games"
          className="px-2 bg-transparent outline-none"
        />
      </div>
      <div>
        {theme == "light" ? (
          <HiOutlineSun
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
          />
        ) : (
          <HiMoon
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Header;