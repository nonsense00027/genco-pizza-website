import React from "react";
import "./App.css";
import Landing from "./components/Landing/";
import Admin from "./components/Admin/";
import Header from "./components/Header";
import Home from "./components/Home/";
import Test from "./components/Test/Test";
import AdminBlog from "./components/Admin/Blog/AdminBlog"
import Blog from "./components/Admin/Blog/UserBlog"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Admin/Layouts/Sidebar";
import AdminHeader from "./components/Admin/Layouts/AdminHeader";
import Footer from "./components/Admin/Layouts/Footer";



// App = Root
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <Route path="/test">
            <AdminHeader></AdminHeader>
            <Sidebar></Sidebar>
            <AdminBlog></AdminBlog>
            <Footer></Footer>
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
