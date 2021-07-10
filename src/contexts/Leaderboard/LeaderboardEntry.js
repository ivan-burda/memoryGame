import React from "react";
import { useSelector } from "react-redux";
import classes from "./LeaderboardEntry.module.css";

export default function LeaderboardEntry({ id }) {
  const leaderboardEntries = useSelector((state) => state.leaderboard);
  const item = leaderboardEntries[id];

  const getRank = (id, leaderboardEntries) => {
    return (
      Object.values(leaderboardEntries)
        .sort((a, b) => a.secondCount - b.secondCount)
        .map((entry) => entry.id)
        .indexOf(id) + 1
    );
  };

  return (
    <li className={classes.Listitem} key={item.id}>
      <p className={classes.Rank}>{getRank(id, leaderboardEntries)}</p>
      <p className={classes.Name}>{item.name}</p>
      <p className={classes.Time}>{item.time}</p>
      <p className={classes.Flips}>{item.requiredFlips}</p>
    </li>
  );
}
