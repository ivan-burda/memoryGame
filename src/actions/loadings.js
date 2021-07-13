export const LEADERBOARD_LOADING = "LEADERBOARD_LOADING";
//LEADERBOARD LOADING
export function leaderboardLoading(loadingState) {
  return {
    type: LEADERBOARD_LOADING,
    loadingState,
  };
}
