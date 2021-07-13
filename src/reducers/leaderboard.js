import { RECEIVE_ITEMS, LEADERBOARD_LOADING } from "../actions/leaderboard";

export default function leaderboard(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    case LEADERBOARD_LOADING:
      return {
        ...state,
        ...action.loadingState,
      };
    default:
      return state;
  }
}
