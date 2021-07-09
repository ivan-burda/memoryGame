import { combineReducers } from "redux";
import cards from "./cards";
import game from "./game";
import timer from "./timer";
import leaderboard from "./leaderboard";

export default combineReducers({ cards, game, timer, leaderboard });
