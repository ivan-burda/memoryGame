import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { useRestartGame } from "../../customHooks/useRestartGame/useRestartGame";
import { handleAddServerItem } from "../../actions/leaderboard";
import { pauseTimer } from "../../actions/timer";
import { displayTime } from "../Timer/Timer";

import Button from "../Button/Button";

import classes from "./Congratulations.module.css";

export default function Congratulations() {
  const dispatch = useDispatch();
  const restartGame = useRestartGame();

  const name = useSelector((state) => state.game.name);
  const flipCount = useSelector((state) => state.game.flipCount);
  const timerTime = useSelector((state) => state.timer.timerTime);
  const cards = Object.values(useSelector((state) => state.cards));

  let newLeaderBoardItem = {
    id: uuidv4(),
    name: name,
    requiredFlips: flipCount,
    time: displayTime(timerTime),
    secondCount: timerTime,
  };

  if (cards.length > 0 && cards.every((card) => card.matched === true)) {
    dispatch(dispatch(pauseTimer()));

    return (
      <div className={classes.Container} onClick={() => false}>
        <div className={classes.Congratulations}>
          <p>Congratulations!</p>
          <Button
            title={"Play again"}
            action={() => {
              restartGame();
              dispatch(handleAddServerItem(newLeaderBoardItem));
            }}
          />
        </div>
      </div>
    );
  } else {
    return false;
  }
}
