import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { loadCards } from "./actions/cards";

import imgFilenames from "./media/imgFilenames";
import Dashboard from "./components/Dashboard/Dashboard";
import Maingrid from "./contexts/Maingrid/Maingrid";
import Leaderboard from "./contexts/Leaderboard/Leaderboard";
import Footer from "./components/Footer/Footer";
import Congratulations from "./components/Congratulations/Congratulations";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const nameAvailable = useSelector((state) => state.game.name);
  const pairCount = useSelector((state) => state.game.pairCount);
  const showCongrats = useSelector((state) => state.game.showCongrats);

  React.useEffect(() => {
    if (nameAvailable !== "") {
      dispatch(loadCards(imgFilenames(pairCount)));
    }
  }, [nameAvailable, dispatch, pairCount]);

  return (
    <div className="App">
      <Dashboard />
      {showCongrats === true ? <Congratulations /> : null}
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
