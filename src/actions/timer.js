export const START_TIMER = "START_TIMER";
export const INCREASE_TIMER = "INCREASE_TIMER";
export const PAUSE_TIMER = "PAUSE_TIMER";

export function startTimer() {
  return {
    type: START_TIMER,
  };
}

export function increaseTimer(newCount) {
  return {
    type: INCREASE_TIMER,
    newCount,
  };
}

export function pauseTimer() {
  return {
    type: PAUSE_TIMER,
  };
}
