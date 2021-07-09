import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={classes.active}>
              Game
            </NavLink>
            <NavLink to="/leaderboard" activeClassName={classes.active}>
              Leaderboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
