import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setName } from "../../actions/game";
import { pauseTimer } from "../../actions/timer";
import { useRestartGame } from "../../customHooks//useRestartGame/useRestartGame";

import Button from "../Button/Button";

import classes from "./NameInput.module.css";

export default function NameInput() {
  const dispatch = useDispatch();
  const restartGame = useRestartGame();
  const name = useSelector((state) => state.game.name);
  const [inputfieldName, setInputfieldName] = React.useState("");
  const [btnDisabled, setBtnDisabled] = React.useState(true);
  const [classList, setClassList] = React.useState([classes.NameInput])

  React.useEffect(() => {
    if (!name) {
      dispatch(pauseTimer());
    }
  }, [name, dispatch]);

  React.useEffect(() => {
    if (inputfieldName === "") {
      setBtnDisabled(true)
      setClassList(classList.concat(classes.Required))
    } else {
      setBtnDisabled(false);
      setClassList(classList.filter((item) => item !== classes.Required));
    }
  }, [inputfieldName]);


  return (
    <div>
      <input type="text" placeholder="Your name" className={classList.join(" ")} onChange={(e) => setInputfieldName(e.target.value)} value={inputfieldName} />
      <Button
        title={"Start"}
        disableMe={btnDisabled}
        action={() => {
          dispatch(setName(inputfieldName));
          restartGame();
        }}
      />
    </div>
  );
}
