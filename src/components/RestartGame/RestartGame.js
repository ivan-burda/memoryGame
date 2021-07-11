import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { VscDebugRestart } from "react-icons/vsc";
import { resetCards } from "../../actions/cards";
import { resetFlipCount } from "../../actions/game";
import imgFilenames from "../../media/imgFilenames";
import { startTimer, resetTimer, unpauseTimer, pauseTimer } from "../../actions/timer";
import classes from "./RestartGame.module.css";

export default function RestartGame() {
  const dispatch = useDispatch();
  const pairCount = useSelector((state) => state.game.pairCount);

  const restartGame = () => {
    dispatch(resetCards(imgFilenames(pairCount)));
    setTimeout(() => {
      dispatch(resetFlipCount());
      dispatch(pauseTimer());
      dispatch(resetTimer());
    }, 500);
    setTimeout(() => {
      dispatch(startTimer());
    }, 1000);
  };

  return (
    <button type="button" className={classes.Button} onClick={() => restartGame()}>
      Restart
    </button>
  );
}
