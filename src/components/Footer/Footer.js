import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { unpauseTimer } from "../../actions/timer";

import classes from "./Footer.module.css";

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <footer className={classes.Footer}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={classes.active} className={classes.Link} onClick={() => dispatch(unpauseTimer())}>
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
