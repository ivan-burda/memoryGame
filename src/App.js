import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import { loadCards } from "./actions/cards";
import imgFilenames from "./media/imgFilenames";

import Dashboard from "./components/Dashboard/Dashboard";
import Maingrid from "./contexts/Maingrid/Maingrid";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadCards(imgFilenames(2)));
  }, [dispatch]);

  return (
    <div className="App">
      <Dashboard />
      <Maingrid />
      <Switch>
        <Footer />
      </Switch>
    </div>
  );
}

export default App;
