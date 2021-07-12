import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { unpauseTimer } from "../../actions/timer";

import classes from "./Footer.module.css";

export default function Footer() {
  const dispatch = useDispatch();

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
              onClick={() =>
                // When returning to card, I have to unpause the time with a bit of delay, because flip

                setTimeout(function () {
                  dispatch(unpauseTimer());
                }, 500)
              }
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
