import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setName } from "../../actions/game";
import { pauseTimer } from "../../actions/timer";
import { useRestartGame } from "../../customHooks//useRestartGame/useRestartGame";

import classes from "./NameInput.module.css";

export default function NameInput() {
  const dispatch = useDispatch();
  const restartGame = useRestartGame();
  const name = useSelector((state) => state.game.name);
  const [inputfieldName, setInputfieldName] = React.useState("");

  React.useEffect(() => {
    if (!name) {
      dispatch(pauseTimer());
    }
  }, [name, dispatch]);

  return (
    <div>
      <input type="text" placeholder="Your name" className={classes.NameInput} onChange={(e) => setInputfieldName(e.target.value)} value={inputfieldName} />
      <button
        type="button"
        className={classes.Button}
        onClick={() => {
          dispatch(setName(inputfieldName));
          restartGame();
        }}
      >
        Start
      </button>
    </div>
  );
}
