import { LOAD_CARDS, FLIP_CARD, FLIP_BACK_UNMATCHED, MARK_MATCHED } from "../actions/cards";

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
      let updatedState = { ...state };
      let flipped1Updated = { ...updatedState[`${action.flipped1}`] };
      flipped1Updated.flipped = !flipped1Updated.flipped;
      let flipped2Updated = { ...updatedState[`${action.flipped2}`] };
      flipped2Updated.flipped = !flipped2Updated.flipped;
      return {
        ...state,
        [action.flipped1]: flipped1Updated,
        [action.flipped2]: flipped2Updated,
      };
    case MARK_MATCHED:
      let updatedState2 = { ...state };
      let matched1Updated = { ...updatedState2[`${action.matched1}`] };
      matched1Updated.matched = !matched1Updated.matched;
      let matched2Updated = { ...updatedState2[`${action.matched2}`] };
      matched2Updated.matched = !matched2Updated.matched;
      return {
        ...state,
        [action.matched1]: matched1Updated,
        [action.matched2]: matched2Updated,
      };
    default:
      return state;
  }
}
