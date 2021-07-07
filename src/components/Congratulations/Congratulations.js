import React from "react";
import { useDispatch } from "react-redux";
import { resetCards } from "../../actions/cards";
import imgFilenames from "../../media/imgFilenames";
import classes from "./Congratulations.module.css";

export default function Congratulations() {
  const dispatch = useDispatch();
  return (
    <div className={classes.Congratulations}>
      <p>Congratulations!</p>
      <button type="button" onClick={() => dispatch(resetCards(imgFilenames(3)))}>
        Play again
      </button>
    </div>
  );
}
