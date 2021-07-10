import React from "react";
import { useSelector } from "react-redux";
import classes from "./Listitem.module.css";

export default function Listitem({ id }) {
  const allItems = useSelector((state) => state.leaderboard);
  const item = allItems[id];

  const getRank = (id) => {
    let itemsSortedByFlips = Object.keys(allItems)
      .map((item) => {
        const { name, requiredFlips, time } = allItems[item];
        console.log(allItems[item]);
        return {
          id,
          name,
          requiredFlips,
          time,
        };
      })
      .sort((a, b) => a.requiredFlips - b.requiredFlips);
    return itemsSortedByFlips.indexOf(id) + 1;
  };

  return (
    <li className={classes.Listitem} key={item.id}>
      <p className={classes.Rank}>{getRank(id)}</p>
      <p className={classes.Name}>{item.name}</p>
      <p className={classes.Time}>{item.time}</p>
      <p className={classes.Flips}>{item.requiredFlips}</p>
    </li>
  );
}
