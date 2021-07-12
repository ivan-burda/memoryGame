import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { unpauseTimer } from "../../actions/timer";
import { saveLastLocation } from "../../actions/game";

import classes from "./Footer.module.css";

export default function Footer() {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <footer className={classes.Footer}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              activeClassName={classes.active}
              className={classes.Link}
              onClick={() => {
                dispatch(saveLastLocation(location.pathname));
                dispatch(unpauseTimer());
              }}
            >
              Game
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" activeClassName={classes.active} className={classes.Link}>
              Leaderboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
