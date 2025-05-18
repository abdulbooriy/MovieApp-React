import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { initialState, reducer } from "./context/reducer";
import { ContextProvider } from "./context/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider initialState={initialState} reducer={reducer}>
      <App />
    </ContextProvider>
  </BrowserRouter>
);
