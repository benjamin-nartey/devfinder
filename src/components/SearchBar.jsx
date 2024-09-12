import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { CiSearch } from "react-icons/ci";
import { useGitHubFetch } from "../hooks/useGitHubFetch";

export default function SearchBar() {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const { searchUser, error, message } = useGitHubFetch();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      alert("Enter User");
    } else {
      searchUser(searchTerm);
      setSearchTerm("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`lg:w-[45%] md:w-[60%] w-[90%] flex justify-between items-center ${
        theme === "light" ? "bg-lightModeWhite" : "bg-darkModeDark"
      } px-2 py-2 md:px-4 rounded-md`}
    >
      <div className="flex gap-2 justify-start items-center w-[50%]">
        <span>
          <CiSearch className="text-PrimaryBlue text-lg" />
        </span>
        <input
          type="text"
          onChange={handleChange}
          className={`border-0 text-lightModeAsh focus:outline-none w-[80%] font-spacemono text-sm ${
            theme === "light" ? "bg-lightModeWhite" : "bg-darkModeDark"
          }`}
          placeholder="Search GitHub Username..."
        />
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-sm text-red-500">{error && `${message}`}</span>
        <button
          type="submit"
          className="bg-PrimaryBlue px-2 py-1 md:py-2 rounded-md text-lightModeWhite md:text-xl text-sm"
        >
          Search
        </button>
      </div>
    </form>
  );
}
