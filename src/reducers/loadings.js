import { LEADERBOARD_LOADING } from "../actions/loadings";

export default function loadings(state = { leaderboardLoading: false }, action) {
  switch (action.type) {
    case LEADERBOARD_LOADING:
      return {
        ...state,
        leaderboardLoading: action.loadingState,
      };
    default:
      return state;
  }
}
