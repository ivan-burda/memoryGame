import { INCREASE_FLIP_COUNT, RESET_FLIP_COUNT, SET_NAME, SAVE_LAST_LOCATION } from "../actions/game";

export default function game(state = { flipCount: 0, showCongrats: false, name: "", pairCount: 4, lastLocation: "/" }, action) {
  switch (action.type) {
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
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    case SAVE_LAST_LOCATION:
      return {
        ...state,
        lastLocation: action.pathname,
      };

    default:
      return state;
  }
}
