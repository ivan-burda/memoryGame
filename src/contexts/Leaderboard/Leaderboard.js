import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleReceiveServerItems } from "../../actions/leaderboard";
import classes from "./Leaderboard.module.css";
import Listitem from "./Listitem";

export default function Leaderboard() {
  const dispatch = useDispatch();
  const leaderboardListItems = useSelector((state) => state.leaderboard);

  React.useEffect(() => {
    dispatch(handleReceiveServerItems());
  }, [dispatch]);

  if (Object.keys(leaderboardListItems).length === 0) {
    return (
      <div className={classes.Loading}>
        <p>Loading... </p>
      </div>
    );
  } else {
    const leaderboardItemsSorted = Object.keys(leaderboardListItems)
      .map((id) => {
        const { name, requiredFlips, time } = leaderboardListItems[id];
        return {
          id,
          name,
          requiredFlips,
          time,
        };
      })
      .sort((a, b) => a.requiredFlips - b.requiredFlips);

    return (
      <ul className={classes.Leaderboard}>
        <li className={classes.Header}>
          <p className={classes.Rank}>Rank</p>
          <p className={classes.Name}>Name</p>
          <p className={classes.Flips}>Flips</p>
          <p className={classes.Time}>Time</p>
        </li>
        {leaderboardItemsSorted.map((item) => (
          <Listitem key={item.id} id={item.id} />
        ))}
      </ul>
    );
  }
}
