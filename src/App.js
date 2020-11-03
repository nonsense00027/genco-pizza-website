import React, { useEffect } from "react";
import "./App.css";
import Landing from "./components/Landing/";
import Admin from "./components/Admin/";
import Header from "./components/Header";
import Home from "./components/Home/";
import Blog from "./components/Admin/Blog/UserBlog";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import { db } from "./firebase";
import { useStateValue } from "./DataLayer";
import { types } from "./Reducer";

// App = Root
function App() {
  const [{ products }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      dispatch({
        type: types.GET_PRODUCTS,
        payload: snapshot.docs,
      });
    });

    db.collection("categories").onSnapshot((snapshot) => {
      dispatch({
        type: types.GET_CATEGORIES,
        payload: snapshot.docs,
      });
    });
  }, []);

  // console.log("PRODUCTS", products);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/home/:category">
            {/* <Header /> */}
            <Home />
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// Login

// Landing Page

// Dashboard

// Header

// Blog

// Logs

// Inventory Management
