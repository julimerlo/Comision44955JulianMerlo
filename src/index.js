import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";
import { CartContextProvider } from "./context/cartContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDm9GiFgEpZ_U66XrR9FncK36KBwM3TGDE",
  authDomain: "ecommerce-para-coder-adc70.firebaseapp.com",
  projectId: "ecommerce-para-coder-adc70",
  storageBucket: "ecommerce-para-coder-adc70.appspot.com",
  messagingSenderId: "992438163876",
  appId: "1:992438163876:web:4e6ccfbb9392c7f3418931",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
