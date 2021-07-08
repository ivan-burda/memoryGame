import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Timer() {
  let gameFinished = useSelector((state) => state.game.showCongrats);
  let [secCounter, setSecCounter] = React.useState(0);

  React.useEffect(() => {
    if (!gameFinished) {
      setSecCounter(0);
    }
  }, [gameFinished]);

  if (!gameFinished) {
    setTimeout(function time() {
      setSecCounter(secCounter + 1);
    }, 1000);
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
