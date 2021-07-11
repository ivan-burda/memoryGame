import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Maingrid from "./contexts/Maingrid/Maingrid";
import Leaderboard from "./contexts/Leaderboard/Leaderboard";
import Footer from "./components/Footer/Footer";
import Congratulations from "./components/Congratulations/Congratulations";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Congratulations />
      <Switch>
        <Route path="/leaderboard" exact component={Leaderboard} />
        <Route path="/" exact component={Maingrid} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
