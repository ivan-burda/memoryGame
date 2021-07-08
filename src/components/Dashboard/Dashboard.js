import React from "react";
import { useSelector } from "react-redux";
import Timer from "../Timer/Timer";
import classes from "./Dashboard.module.css";

export default function Dashboard() {
  const flipCount = useSelector((state) => state.game.flipCount);
  return (
    <div className={classes.Dashboard}>
      <p>Total flips: {flipCount}</p>{" "}
      <div className={classes.Timer}>
        <p style={{ marginRight: "0.5em" }}>Timer: </p>
        <Timer />
      </div>
    </div>
  );
}
