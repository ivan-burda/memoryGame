export const LOAD_CARDS = "LOAD_CARDS";
export const FLIP_CARD = "FLIP_CARD";
export const FLIP_BACK_UNMATCHED = "FLIP_BACK_UNMATCHED";
export const MARK_MATCHED = "MARK_MATCHED";

const random = function () {
  return Math.floor(Math.random() * 100) + 1;
};

//LOAD CARDS
export function loadCards(cards) {
  const cardData = {};
  cards.forEach((card) => {
    cardData[`${cards.indexOf(card) + 1}a`] = {
      matchingId: cards.indexOf(card) + 1,
      uniqueId: `${cards.indexOf(card) + 1}a`,
      imgFilename: card,
      randomFactor: random(),
      matched: false,
      flipped: false,
    };
    cardData[`${cards.indexOf(card) + 1}b`] = {
      matchingId: cards.indexOf(card) + 1,
      uniqueId: `${cards.indexOf(card) + 1}b`,
      imgFilename: card,
      randomFactor: random(),
      matched: false,
      flipped: false,
    };
  });
  return {
    type: LOAD_CARDS,
    cards: cardData,
  };
}

//FLIP CARD
export function flipCard(id) {
  return {
    type: FLIP_CARD,
    id,
  };
}

//FLIP BACK ALL UNMACTHED
export function flipBackUnmatched({ flipped1, flipped2 }) {
  return {
    type: FLIP_BACK_UNMATCHED,
    flipped1,
    flipped2,
  };
}

//MARK MATCHED
export function markMatched({ matched1, matched2 }) {
  return {
    type: MARK_MATCHED,
    matched1,
    matched2,
  };
}
