import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./Footer.module.css";
import { unpauseTimer } from "../../actions/timer";

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
              onClick={() => {
                setTimeout(function () {
                  dispatch(unpauseTimer());
                }, 500);
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
