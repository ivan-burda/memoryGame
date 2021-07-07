import { SHOW_CONGRATS } from "../actions/game";

export default function game(state = [], action) {
  switch (action.type) {
    case SHOW_CONGRATS:
      return {
        ...state,
        showCongrats: action.desiredState,
      };

    default:
      return state;
  }
}
