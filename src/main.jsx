import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "./context/themeContext.jsx";
import { GitHubProvider } from "./context/GitHubContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GitHubProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </GitHubProvider>
  </StrictMode>
);
