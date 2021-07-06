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
      let cardsToFlipBack = Object.values(updatedState).filter((item) => item.flipped === true && item.matched === false && item.uniqueId !== action.exceptOf);
      //console.log("cardsToFlipBack", cardsToFlipBack);
      let numberOfCardsToFlipBack = cardsToFlipBack.length;
      console.log(numberOfCardsToFlipBack);
      let flippedBack = [];
      let flippedObj = {};
      if (numberOfCardsToFlipBack === 2) {
        //|| action.match === true
        cardsToFlipBack.forEach((item) => flippedBack.push({ ...item }));
        flippedBack.forEach((item) => (item.flipped = !item.flipped));
        flippedBack.forEach((item) => (flippedObj[item.uniqueId] = item));
      }

      //console.log("flippedBack", flippedBack);
      // console.log(updatedState);
      // console.log(unwrappedItems);
      // console.log(flippedBack);
      // console.log(flippedObj);

      return {
        ...state,
        ...flippedObj,
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
