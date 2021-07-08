export const SHOW_CONGRATS = "SHOW_CONGRATS";
export const INCREASE_FLIP_COUNT = "INCREASE_FLIP_COUNT";
export const RESET_FLIP_COUNT = "RESET_FLIP_COUNT";
export const SET_TIME_BEHAVIOUR = "SET_TIME_BEHAVIOUR";

//SHOW CONGRATS
export function showCongrats(desiredState) {
  return {
    type: SHOW_CONGRATS,
    desiredState,
  };
}

//INCREASE_FLIP_COUNT
export function increaseFlipCount() {
  return {
    type: INCREASE_FLIP_COUNT,
  };
}

//RESET_FLIP_COUNT
export function resetFlipCount() {
  return {
    type: RESET_FLIP_COUNT,
  };
}

//SET_TIME_BEHAVIOUR
export function setTimeBehaviour(behaviour) {
  return {
    type: SET_TIME_BEHAVIOUR,
    behaviour,
  };
}
