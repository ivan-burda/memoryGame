import React from "react";
import { useDispatch } from "react-redux";
import { resetCards } from "../../actions/cards";
import { resetFlipCount } from "../../actions/game";
import { startTimer, resetTimer } from "../../actions/timer";
import imgFilenames from "../../media/imgFilenames";
import classes from "./Congratulations.module.css";

export default function Congratulations() {
  const dispatch = useDispatch();
  const restartGame = () => {
    dispatch(resetCards(imgFilenames(3)));
    dispatch(resetFlipCount());
    dispatch(startTimer());
  };
  return (
    <div className={classes.Congratulations}>
      <p>Congratulations!</p>
      <button type="button" onClick={() => restartGame()}>
        Play again
      </button>
    </div>
  );
}
