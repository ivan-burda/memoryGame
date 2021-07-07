import React from "react";
import classes from "./Congratulations.module.css";

export default function Congratulations() {
  return (
    <div className={classes.Congratulations}>
      <p>Congratulations!</p>
      <button type="butto">Play again</button>
    </div>
  );
}
