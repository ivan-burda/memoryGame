export const SHOW_CONGRATS = "SHOW_CONGRATS";

//SHOW CONGRATS
export function showCongrats(desiredState) {
  return {
    type: SHOW_CONGRATS,
    desiredState,
  };
}
