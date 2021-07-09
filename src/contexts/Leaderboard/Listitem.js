import React from "react";
import { useSelector } from "react-redux";
import classes from "./Listitem.module.css";

export default function Listitem({ id }) {
  const allItems = useSelector((state) => state.leaderboard);
  const item = allItems[id];

  const getRank = (id) => {
    let itemsSortedByFlips = Object.keys(allItems).sort((a, b) => b.requiredFlips - a.requiredFlips);
    return itemsSortedByFlips.indexOf(id) + 1;
  };

  return (
    <li className={classes.Listitem} key={item.id}>
      <p className={classes.Rank}>{getRank(id)}</p>
      <p className={classes.Name}>{item.name}</p>
      <p className={classes.Flips}>{item.requiredFlips}</p>
      <p className={classes.Time}>{item.time}</p>
    </li>
  );
}
