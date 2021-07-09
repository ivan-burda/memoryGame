import { START_TIMER, INCREASE_TIMER, PAUSE_TIMER } from "../actions/timer";

export default function timer(
  state = {
    timerOn: true,
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
      return {
        ...state,
        timerTime: action.newCount,
      };
    case PAUSE_TIMER:
      return {
        ...state,
        timerOn: false,
      };
    default:
      return state;
  }
}
