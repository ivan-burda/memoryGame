import { LOAD_CARDS, FLIP_CARD, FLIP_BACK_UNMATCHED_CARDS, MARK_MATCHED_CARDS } from "../actions/cards";

//A function for creating a card object
function createCard(cards, card, variant) {
  return {
    matchingId: cards.indexOf(card) + 1,
    uniqueId: `${cards.indexOf(card) + 1}${variant}`,
    imgFilename: card,
    randomFactor: Math.floor(Math.random() * 100) + 1, //To make sure cards are located at different positions. Based on the random factor they get ordered in the grid
    matched: false,
    flipped: false,
  };
}

//Reducers
export default function cards(state = [], action) {
  switch (action.type) {
    case LOAD_CARDS:
      const cardData = {};
      const cards = action.cards;
      cards.forEach((card) => {
        cardData[`${cards.indexOf(card) + 1}a`] = createCard(cards, card, "a");
        cardData[`${cards.indexOf(card) + 1}b`] = createCard(cards, card, "b");
      });
      return {
        ...state,
        ...cardData,
      };
    case FLIP_CARD:
      let cardDetail = { ...state[action.id] };
      cardDetail.flipped = !cardDetail.flipped;
      return {
        ...state,
        [action.id]: cardDetail,
      };
    case FLIP_BACK_UNMATCHED_CARDS:
      let updatedState = { ...state };
      let cardsToFlipBack = Object.values(updatedState).filter((item) => item.flipped === true && item.matched === false && item.uniqueId !== action.exceptOf);
      let numberOfCardsToFlipBack = cardsToFlipBack.length;
      let flippedBack = [];
      let flippedObj = {};
      if (numberOfCardsToFlipBack === 2) {
        cardsToFlipBack.forEach((item) => flippedBack.push({ ...item }));
        flippedBack.forEach((item) => (item.flipped = !item.flipped));
        flippedBack.forEach((item) => (flippedObj[item.uniqueId] = item));
      }
      return {
        ...state,
        ...flippedObj,
      };
    case MARK_MATCHED_CARDS:
      let matched1Updated = { ...state[`${action.matched1}`] };
      matched1Updated.matched = true;
      let matched2Updated = { ...state[`${action.matched2}`] };
      matched2Updated.matched = true;
      return {
        ...state,
        [action.matched1]: matched1Updated,
        [action.matched2]: matched2Updated,
      };
    default:
      return state;
  }
}
