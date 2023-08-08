import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/Productcontext";
import { CartProvider } from "./context/cart_contect";
import { FilterContextProvider } from "./context/filter_context";
// import {DummyProvider} from "../src/context/dummycontext"


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
   <FilterContextProvider>
   <CartProvider>
      <App />
    </CartProvider>
    </FilterContextProvider>
</AppProvider>
  
);

