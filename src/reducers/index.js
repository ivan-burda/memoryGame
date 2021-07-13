import { combineReducers } from "redux";
import cards from "./cards";
import game from "./game";
import timer from "./timer";
import leaderboard from "./leaderboard";
import loadings from "./loadings";

export default combineReducers({ cards, game, timer, leaderboard, loadings });
