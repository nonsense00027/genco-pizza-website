import React, { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {
  posts: [],
  user: null,
  products: [],
  displayProducts: [],
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
