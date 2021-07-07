import { combineReducers } from "redux";
import cards from "./cards";
import game from "./game";

export default combineReducers({ cards, game });
