import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../../actions/game";

import { resetCards } from "../../actions/cards";
import { resetFlipCount } from "../../actions/game";
import { startTimer, resetTimer } from "../../actions/timer";

import imgFilenames from "../../media/imgFilenames";

import classes from "./NameInput.module.css";

export default function NameInput() {
  const dispatch = useDispatch();
  const [classList, setclassList] = React.useState([classes.NameInput]);
  const [inputfieldName, setInputfieldName] = React.useState("");
  const name = useSelector((state) => state.game.name);
  const pairs = useSelector((state) => state.game.pairs);

  React.useEffect(() => {
    if (inputfieldName === "") {
      setclassList(classList.concat(classes.InputEmpty));
    } else {
      setclassList([classes.NameInput]);
    }
  }, [name]);

  const restartGame = () => {
    dispatch(resetCards(imgFilenames(pairs)));
    dispatch(resetFlipCount());
    dispatch(startTimer());
    dispatch(setName(inputfieldName));
  };

  return (
    <div>
      <input type="text" placeholder="Your name" className={classList.join(" ")} onChange={(e) => setInputfieldName(e.target.value)} value={inputfieldName} />
      <button type="button" className={classes.Button} onClick={() => restartGame()}>
        Play again
      </button>
    </div>
  );
}