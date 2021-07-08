export const SHOW_CONGRATS = "SHOW_CONGRATS";
export const INCREASE_FLIP_COUNT = "INCREASE_FLIP_COUNT";

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
