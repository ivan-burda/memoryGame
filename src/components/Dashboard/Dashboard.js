import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../../actions/game";
import Timer from "../Timer/Timer";
import classes from "./Dashboard.module.css";

export default function Dashboard() {
  const dispatch = useDispatch();
  const flipCount = useSelector((state) => state.game.flipCount);
  const [inputfieldName, setInputfieldName] = React.useState("");
  return (
    <div className={classes.Dashboard}>
      <div className={classes.DashboardWrapper}>
        <p>Total flips: {flipCount}</p>
        <input type="text" placeholder="Your name" className={classes.NameInput} onChange={(e) => setInputfieldName(e.target.value)} onBlur={() => dispatch(setName(inputfieldName))} value={inputfieldName} />
        <Timer />
      </div>
    </div>
  );
}
