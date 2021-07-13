import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <button type="button" onClick={props.action} className={classes.Button}>
      {props.title}
    </button>
  );
}
