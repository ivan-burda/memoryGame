import { LOAD_CARDS, FLIP_CARD, FLIP_BACK_UNMATCHED } from "../actions/cards";

export default function cards(state = [], action) {
  switch (action.type) {
    case LOAD_CARDS:
      return {
        ...state,
        ...action.cards,
      };
    case FLIP_CARD:
      let newState = { ...state };
      let cardDetail = { ...state[action.id] };
      cardDetail.flipped = !cardDetail.flipped;
      newState[action.id] = !state[action.id];
      return {
        ...state,
        [action.id]: cardDetail,
      };
    case FLIP_BACK_UNMATCHED:
      let newState1 = { ...state };
      let unmatched = state;
      console.log(unmatched);

      return {
        ...state,
      };

    default:
      return state;
  }
}
