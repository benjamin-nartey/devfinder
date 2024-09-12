import { useContext } from "react";
import { GitHubContext } from "../context/GitHubContext";

export const useGitHubFetch = () => {
  const { user, loading, error, message, dispatch, searchUser } =
    useContext(GitHubContext);

  return { user, loading, error, message, dispatch, searchUser };
};
