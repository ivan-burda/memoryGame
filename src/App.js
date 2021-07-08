import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { loadCards } from "./actions/cards";
import imgFilenames from "./media/imgFilenames";

import Dashboard from "./components/Dashboard/Dashboard";
import Maingrid from "./contexts/Maingrid/Maingrid";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadCards(imgFilenames(3)));
  }, [dispatch]);

  return (
    <div className="App">
      <Dashboard />
      <Maingrid />
    </div>
  );
}

export default App;
