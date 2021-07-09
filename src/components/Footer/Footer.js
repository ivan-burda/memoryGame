import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.Footer}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={classes.active} className={classes.Link}>
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
