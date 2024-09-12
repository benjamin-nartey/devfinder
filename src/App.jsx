import "./App.css";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CardDetails from "./components/CardDetails";
import { useGitHubFetch } from "./hooks/useGitHubFetch";
import { Spinner } from "./components/Spinner";

function App() {
  const { theme } = useTheme();
  const { user, loading } = useGitHubFetch();

  return (
    <div
      className={`w-full min-h-screen ${
        theme === "light" ? "bg-lightModeGhostWhite" : "bg-darkModeBlack"
      } flex flex-col gap-5 items-center justify-start lg:p-6 p-2`}
    >
      <Header />
      <SearchBar />
      {loading && <Spinner />}
      {user.name && <CardDetails />}
    </div>
  );
}

export default App;
