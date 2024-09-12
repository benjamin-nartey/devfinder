import React from "react";
import { useTheme } from "../hooks/useTheme";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsFillBuildingFill, BsLink45Deg, BsTwitter } from "react-icons/bs";
import { useGitHubFetch } from "../hooks/useGitHubFetch";
import { formattedDate } from "../lib/formattedDate";

export default function CardDetails() {
  const { theme } = useTheme();
  const { user } = useGitHubFetch();
  return (
    <div
      className={`flex flex-col lg:w-[45%] md:w-[60%] w-[90%] ${
        theme === "light" ? "bg-lightModeWhite" : "bg-darkModeDark"
      } rounded-sm gap-4 p-12`}
    >
      <div className="flex gap-5 items-center w-full">
        <span
          className={`border-1 rounded-full ${
            theme === "light" ? "bg-lightModeAsh" : "bg-lightModeGhostWhite"
          } w-[80px] h-[60px] md:w-[120px] md:h-[95px] flex justify-center items-center`}
        >
          {user?.avatar_url ? (
            <img
              src={user.avatar_url}
              alt={user.name}
              className="rounded-full w-full h-full object-cover"
            />
          ) : (
            "Avatar"
          )}
        </span>
        <div className="flex w-full flex-col lg:flex-row justify-start md:justify-between items-start">
          <div className="flex flex-col">
            <span
              className={`font-spacemono lg:text-lg text-sm font-bold ${
                theme === "light"
                  ? "text-lightModeBlack"
                  : "text-lightModeWhite"
              }`}
            >
              {user?.name}
            </span>
            <span className="font-spacemono text-[12px] text-PrimaryBlue">
              {user?.login}
            </span>
          </div>
          <div>
            <span
              className={`text-[12px] ${
                theme === "light" ? "text-lightModeAsh" : "text-gray-400"
              } font-spacemono`}
            >
              Joined {formattedDate(`${user?.created_at}`)}
            </span>
          </div>
        </div>
      </div>
      <div className={`flex flex-col gap-3 self-end lg:w-[80%] w-full`}>
        <p
          className={`text-[12px] font-spacemono ${
            theme === "light" ? "text-lightModeAsh" : "text-gray-400"
          }`}
        >
          {user.bio
            ? user.bio
            : ` Lorem, ipsum dolor sit amet consectetur adipisicing
          elit.Necessitatibus est aperiam voluptatum ipsa ea, molestiae
          adipisci. Nisi, autem! Earum, tempora.`}
        </p>
        <div
          className={`w-full px-[2rem] py-3 flex justify-between ${
            theme === "light" ? "bg-lightModeGhostWhite" : "bg-darkModeBlack"
          } rounded-lg`}
        >
          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-lightModeAsh font-spacemono">
              Repos
            </span>
            <span
              className={`font-bold ${
                theme === "light"
                  ? "text-lightModeBlack"
                  : "text-lightModeWhite"
              }`}
            >
              {user?.public_repos}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-lightModeAsh font-spacemono">
              Followers
            </span>
            <span
              className={`font-bold ${
                theme === "light"
                  ? "text-lightModeBlack"
                  : "text-lightModeWhite"
              }`}
            >
              {user?.followers}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[12px] text-lightModeAsh font-spacemono">
              Following
            </span>
            <span
              className={`font-bold ${
                theme === "light"
                  ? "text-lightModeBlack"
                  : "text-lightModeWhite"
              }`}
            >
              {user?.following}
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-2 grid-cols-1">
          <div className="flex gap-2 items-center justify-start">
            <span>
              <FaMapMarkedAlt
                className={`text-sm ${
                  theme === "light"
                    ? "text-lightModeAsh"
                    : "text-lightModeGhostWhite"
                } text-lightModeAsh`}
              />
            </span>
            <p
              className={`text-sm ${
                theme === "light" ? "text-lightModeAsh" : "text-lightModeWhite"
              } font-spacemono`}
            >
              {user.location ? user.location : "No location"}
            </p>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <span>
              <BsTwitter
                className={`text-sm ${
                  theme === "light"
                    ? "text-lightModeAsh"
                    : "text-lightModeGhostWhite"
                } text-lightModeAsh`}
              />
            </span>
            <p
              className={`text-sm ${
                theme === "light" ? "text-lightModeAsh" : "text-lightModeWhite"
              } font-spacemono`}
            >
              {user.twitter_username ? user.twitter_username : "Not available"}
            </p>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <span>
              <BsLink45Deg
                className={`text-sm ${
                  theme === "light"
                    ? "text-lightModeAsh"
                    : "text-lightModeGhostWhite"
                } text-lightModeAsh`}
              />
            </span>
            <a
              href={user.url}
              className={`text-sm ${
                theme === "light" ? "text-lightModeAsh" : "text-lightModeWhite"
              } font-spacemono`}
            >
              {user?.url.length > 25
                ? user.url.substring(0, 25) + "..."
                : user.url}
            </a>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <span>
              <BsFillBuildingFill
                className={`text-sm ${
                  theme === "light"
                    ? "text-lightModeAsh"
                    : "text-lightModeGhostWhite"
                } text-lightModeAsh`}
              />
            </span>
            <p
              className={`text-sm ${
                theme === "light" ? "text-lightModeAsh" : "text-lightModeWhite"
              } font-spacemono`}
            >
              @github
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
