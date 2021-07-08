import { SHOW_CONGRATS, INCREASE_FLIP_COUNT, RESET_FLIP_COUNT, SET_TIME_BEHAVIOUR } from "../actions/game";

export default function game(state = { flipCount: 0, timeAction: "COUNT" }, action) {
  switch (action.type) {
    case SHOW_CONGRATS:
      return {
        ...state,
        showCongrats: action.desiredState,
      };

    case INCREASE_FLIP_COUNT:
      return {
        ...state,
        flipCount: (state.flipCount += 1),
      };
    case RESET_FLIP_COUNT:
      return {
        ...state,
        flipCount: 0,
      };
    case SET_TIME_BEHAVIOUR:
      return {
        ...state,
        timeAction: action.behaviour,
      };

    default:
      return state;
  }
}
