import React, { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer";
import Cookie from "js-cookie";
import { saveToCart } from "./Reducer";

const cartCookie = Cookie.getJSON("cart") || [];
const initialState = {
  posts: [],
  user: null,
  categories: [],
  products: [],
  displayProducts: [],
  cart: cartCookie,
};

//Prepares the data layer
export const StateContext = createContext();

//Wrap our app and provide the Data Layer
export const DataLayer = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
