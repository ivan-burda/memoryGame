import React from "react";

export default function Timer() {
  let [secCounter, setSecCounter] = React.useState(0);

  setTimeout(function time() {
    setSecCounter(secCounter + 1);
  }, 1000);

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
