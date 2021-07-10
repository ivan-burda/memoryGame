import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../../actions/game";
import Timer from "../Timer/Timer";
import classes from "./Dashboard.module.css";
import StartRestart from "../StartRestart/StartRestart";

export default function Dashboard() {
  const dispatch = useDispatch();
  const flipCount = useSelector((state) => state.game.flipCount);
  const name = useSelector((state) => state.game.name);
  const [inputfieldName, setInputfieldName] = React.useState("");
  const [classList, setclassList] = React.useState([classes.NameInput]);

  React.useEffect(() => {
    if (inputfieldName === "") {
      setclassList(classList.concat(classes.InputEmpty));
    } else {
      setclassList([classes.NameInput]);
    }
  }, [name]);

  return (
    <div className={classes.Dashboard}>
      <div className={classes.DashboardWrapper}>
        <p>Total flips: {flipCount}</p>
        <input type="text" placeholder="Your name" className={classList.join(" ")} onChange={(e) => setInputfieldName(e.target.value)} onBlur={() => dispatch(setName(inputfieldName))} value={inputfieldName} />
        <StartRestart />
        <Timer />
      </div>
    </div>
  );
}
