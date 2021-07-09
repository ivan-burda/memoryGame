import { combineReducers } from "redux";
import cards from "./cards";
import game from "./game";
import timer from "./timer";

export default combineReducers({ cards, game, timer });
