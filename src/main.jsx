import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PageProvider } from "./contexts/use-page.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PageProvider>
  </StrictMode>
);
