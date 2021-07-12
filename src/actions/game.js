export const INCREASE_FLIP_COUNT = "INCREASE_FLIP_COUNT";
export const RESET_FLIP_COUNT = "RESET_FLIP_COUNT";
export const SET_NAME = "SET_NAME";
export const SAVE_LAST_LOCATION = "SAVE_LAST_LOCATION";

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

//SET_NAME
export function setName(name) {
  return {
    type: SET_NAME,
    name,
  };
}

//SAVE_LAST_LOCATION
export function saveLastLocation(pathname) {
  return {
    type: SAVE_LAST_LOCATION,
    pathname,
  };
}
