import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleReceiveServerItems } from "../../actions/leaderboard";
import { pauseTimer } from "../../actions/timer";

import Loading from "../../components/Loading/Loading";
import LeaderboardEntry from "./LeaderboardEntry";

import classes from "./Leaderboard.module.css";

export default function Leaderboard() {
  const dispatch = useDispatch();
  const leaderboardEntries = useSelector((state) => state.leaderboard);
  const leaderboardLoading = useSelector((state) => state.loadings.leaderboardLoading);
  console.log("leaderboardLoading", leaderboardLoading);

  React.useEffect(() => {
    dispatch(dispatch(pauseTimer()));
    dispatch(handleReceiveServerItems());
  }, [dispatch]);

  //Return UI
  if (leaderboardLoading) {
    return <Loading />;
  } else if (Object.values(leaderboardEntries).length === 0) {
    return (
      <div className={classes.Loading}>
        <p>No stats available yet </p>
      </div>
    );
  } else {
    const topTenLeaderBoardEntriesSorted = Object.values(leaderboardEntries)
      .sort((a, b) => a.secondCount - b.secondCount || a.requiredFlips - b.requiredFlips)
      .slice(0, 10);

    return (
      <ul className={classes.Leaderboard}>
        <li className={classes.Header}>
          <p className={classes.Rank}>Rank</p>
          <p className={classes.Name}>Name</p>
          <p className={classes.Time}>Time</p>
          <p className={classes.Flips}>Flips</p>
        </li>
        {topTenLeaderBoardEntriesSorted.map((item) => (
          <LeaderboardEntry key={item.id} id={item.id} />
        ))}
      </ul>
    );
  }
}
