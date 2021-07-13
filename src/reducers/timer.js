import { START_TIMER, INCREASE_TIMER, PAUSE_TIMER, RESET_TIMER, UNPAUSE_TIMER } from "../actions/timer";

export default function timer(
  state = {
    timerOn: false,
    timerTime: 0,
  },
  action
) {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        timerOn: true,
        timerTime: 0,
      };
    case INCREASE_TIMER:
      if (!state.timerOn) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          timerTime: action.newCount,
        };
      }
    case PAUSE_TIMER:
      return {
        ...state,
        timerOn: false,
      };
    case UNPAUSE_TIMER:
      return {
        ...state,
        timerOn: true,
      };
    case RESET_TIMER:
      return {
        ...state,
        timerTime: 0,
        timerOn: true,
      };
    default:
      return state;
  }
}
