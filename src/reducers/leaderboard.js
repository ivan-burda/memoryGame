import { RECEIVE_ITEMS } from "../actions/leaderboard";

export default function leaderboard(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return {
        ...state,
        ...action.items,
      };
    default:
      return state;
  }
}
