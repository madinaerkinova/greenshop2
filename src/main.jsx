import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        {" "}
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </Provider>
);
