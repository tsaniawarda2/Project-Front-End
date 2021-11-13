import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { DataProvider } from "./context/DataProduct";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
          <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
