import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showCongrats } from "../../actions/game";
import { increaseTimer } from "../../actions/timer";

export default function Timer() {
  const dispatch = useDispatch();

  let timerOn = useSelector((state) => state.timer.timerOn);
  let timerTime = useSelector((state) => state.timer.timerTime);

  if (timerOn) {
    setTimeout(function time() {
      dispatch(increaseTimer((timerTime += 1)));
    }, 1000);
  }

  const displayTime = () => {
    let minutes = parseInt(timerTime / 60);
    let minutesPrecedingZero = minutes < 10 ? "0" : "";
    let secondes = timerTime - minutes * 60;
    let secondesPrecedingZero = secondes < 10 ? "0" : "";
    let display = `${minutesPrecedingZero}${minutes}:${secondesPrecedingZero}${secondes}`;
    return display;
  };

  return (
    <div>
      <p>{displayTime()}</p>
    </div>
  );
}
