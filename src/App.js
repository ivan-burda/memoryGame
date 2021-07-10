import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { loadCards } from "./actions/cards";
import imgFilenames from "./media/imgFilenames";

import Dashboard from "./components/Dashboard/Dashboard";
import Maingrid from "./contexts/Maingrid/Maingrid";
import Leaderboard from "./contexts/Leaderboard/Leaderboard";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const nameAvailable = useSelector((state) => state.game.name);
  React.useEffect(() => {
    if (nameAvailable !== "") {
      dispatch(loadCards(imgFilenames(2)));
    }
  }, [nameAvailable, dispatch]);

  return (
    <div className="App">
      <Dashboard />
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
