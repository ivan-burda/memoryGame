import React from "react";
import { useSelector } from "react-redux";
import { VscDebugStart } from "react-icons/vsc";
import { VscDebugRestart } from "react-icons/vsc";
import classes from "./StartRestart.module.css";

export default function StartRestart() {
  const gameRunning = useSelector((state) => state.timer.timerOn);
  console.log(gameRunning);
  return (
    <button type="button" className={classes.Button}>
      {!gameRunning ? <VscDebugStart /> : <VscDebugRestart />}
    </button>
  );
}
