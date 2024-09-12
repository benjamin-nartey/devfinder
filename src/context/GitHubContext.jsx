import { createContext, useReducer } from "react";
import { gitHubReducer } from "../lib/gitHubReducer";
import axios from "axios";

const inintialState = {
  user: {},
  repos: [],
  laoding: false,
  error: false,
  message: "",
};

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

export const GitHubContext = createContext({
  user: {},
  loading: false,
  error: "",
  message: "",
  dispatch: () => null,
  searchUser: () => null,
});

export const GitHubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gitHubReducer, inintialState);
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  const setError = (text) => dispatch({ type: "SET_ERROR", payload: text });

  const searchUser = async (login) => {
    try {
      setLoading();
      const response = await axios.get(`${GITHUB_URL}/${login}`, {
        header: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });

      const data = await response.data;
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const value = {
    ...state,
    user: state.user,
    loading: state.loading,
    error: state.error,
    message: state.message,
    dispatch,
    searchUser,
  };

  return (
    <GitHubContext.Provider value={value}>{children}</GitHubContext.Provider>
  );
};
