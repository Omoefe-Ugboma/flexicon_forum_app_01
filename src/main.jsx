import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Toaster
            position="top-right"
            toastOptions={{
              success: {
                style: {
                  border: "1px solid #21da30",
                  padding: "2rem",
                  color: "#fff",
                  background: "#21da3058",
                },
              },
              error: {
                style: {
                  border: "1px solid #ff0000",
                  padding: "1rem 2rem",
                  color: "#fff",
                  background: "#ff000057",
                  
                },
              },
            }}
          />
        </div>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
