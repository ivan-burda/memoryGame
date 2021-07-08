import React from "react";
import { useSelector } from "react-redux";

export default function Timer() {
  let gameFinished = useSelector((state) => state.game.showCongrats);
  let timeAction = useSelector((state) => state.game.timeAction);
  let [secCounter, setSecCounter] = React.useState(0);

  //As long as the game is not finished run the timer
  if (timeAction === "COUNT") {
    setTimeout(function time() {
      setSecCounter(secCounter + 1);
    }, 1000);
  } else if (timeAction === "RESTART") {
    setSecCounter(0);
  } else if (timeAction === "STOP") {
    console.log("nix mochen");
  }
  const displayTime = () => {
    let minutes = parseInt(secCounter / 60);
    let minutesPrecedingZero = minutes < 10 ? "0" : "";
    let secondes = secCounter - minutes * 60;
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
