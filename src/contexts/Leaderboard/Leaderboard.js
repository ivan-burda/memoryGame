import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleReceiveServerItems } from "../../actions/leaderboard";
import classes from "./Leaderboard.module.css";
import LeaderboardEntry from "./LeaderboardEntry";

export default function Leaderboard() {
  const dispatch = useDispatch();
  const leaderboardEntries = useSelector((state) => state.leaderboard);

  React.useEffect(() => {
    dispatch(handleReceiveServerItems());
  }, [dispatch]);

  if (Object.keys(leaderboardEntries).length === 0) {
    return (
      <div className={classes.Loading}>
        <p>Loading... </p>
      </div>
    );
  } else {
    const leaderboardItemsSorted = Object.keys(leaderboardEntries)
      .map((id) => {
        const { name, requiredFlips, time, secondCount } = leaderboardEntries[id];
        return {
          id,
          name,
          requiredFlips,
          time,
          secondCount,
        };
      })
      .sort((a, b) => a.secondCount - b.secondCount || a.requiredFlips - b.requiredFlips)
      .slice(0, 10); //Show only top 10 results

    return (
      <ul className={classes.Leaderboard}>
        <li className={classes.Header}>
          <p className={classes.Rank}>Rank</p>
          <p className={classes.Name}>Name</p>
          <p className={classes.Time}>Time</p>
          <p className={classes.Flips}>Flips</p>
        </li>
        {leaderboardItemsSorted.map((item) => (
          <LeaderboardEntry key={item.id} id={item.id} />
        ))}
      </ul>
    );
  }
}
