import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { loadCards } from "./actions/cards";
import imgFilenames from "./media/imgFilenames";

import Maingrid from "./contexts/Maingrid/Maingrid";
import Timer from "./components/Timer/Timer";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadCards(imgFilenames(3)));
  }, [dispatch]);

  return (
    <div className="App">
      <Maingrid />
      <Timer />
    </div>
  );
}

export default App;
