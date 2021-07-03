import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { loadCards, flipBackUnmatched } from "./actions/cards";
import imgFilenames from "./media/imgFilenames";

import Maingrid from "./contexts/Maingrid/Maingrid";

function App() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  React.useEffect(() => {
    dispatch(loadCards(imgFilenames(12)));
  }, [dispatch]);

  return (
    <div className="App">
      <Maingrid />
    </div>
  );
}

export default App;
