import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { resetCards } from "../../actions/cards";
import { resetFlipCount } from "../../actions/game";
import { startTimer, resetTimer } from "../../actions/timer";
import { handleAddServerItem } from "../../actions/leaderboard";
import imgFilenames from "../../media/imgFilenames";
import { displayTime } from "../Timer/Timer";
import classes from "./Congratulations.module.css";

export default function Congratulations() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.game.name);
  const flipCount = useSelector((state) => state.game.flipCount);
  const timerTime = useSelector((state) => state.timer.timerTime);
  const pairs = useSelector((state) => state.game.pairs);
  let newLeaderBoardItem = {
    id: uuidv4(),
    name: name,
    requiredFlips: flipCount,
    time: displayTime(timerTime),
    secondCount: timerTime,
  };
  const restartGame = () => {
    dispatch(resetCards(imgFilenames(pairs)));
    dispatch(resetFlipCount());
    dispatch(startTimer());
    dispatch(handleAddServerItem(newLeaderBoardItem));
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
