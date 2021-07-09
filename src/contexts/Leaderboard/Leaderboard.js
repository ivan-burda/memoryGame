import React from "react";
import { useDispatch } from "react-redux";
import { handleReceiveServerItems } from "../../actions/leaderboard";

export default function Leaderboard() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(handleReceiveServerItems());
  }, [dispatch]);
  return (
    <div>
      <ul>
        <li>1. Ivan, 24, 01:12</li>
      </ul>
    </div>
  );
}
