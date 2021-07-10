export const START_TIMER = "START_TIMER";
export const INCREASE_TIMER = "INCREASE_TIMER";
export const PAUSE_TIMER = "PAUSE_TIMER";
export const UNPAUSE_TIMER = "UNPAUSE_TIMER";
export const RESET_TIMER = "RESET_TIMER";

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

export function unpauseTimer() {
  return {
    type: UNPAUSE_TIMER,
  };
}

export function resetTimer() {
  return {
    type: RESET_TIMER,
  };
}
