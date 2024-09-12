import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex  lg:w-[45%] md:w-[60%] w-[90%] mx-auto justify-between items-center ">
      <h1
        className={`font-spacemono text-lg ${
          theme === "light" ? "text-lightModeBlack" : "text-lightModeWhite"
        }`}
      >
        devfinder
      </h1>
      <div className="flex gap-2 items-center">
        <span
          className={`uppercase text-sm ${
            theme === "light" ? "text-lightModeBlack" : "text-darkModeWhite"
          } font-spacemono`}
        >
          {theme === "light" ? "Dark" : "Light"}
        </span>
        {theme === "light" ? (
          <span>
            <MdDarkMode
              onClick={toggleTheme}
              className="text-lightModeAsh text-lg cursor-pointer"
            />
          </span>
        ) : (
          <span>
            <MdLightMode
              onClick={toggleTheme}
              className="text-lightModeGhostWhite text-lg cursor-pointer"
            />
          </span>
        )}
      </div>
    </div>
  );
}
