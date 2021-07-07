export const LOAD_CARDS = "LOAD_CARDS";
export const FLIP_CARD = "FLIP_CARD";
export const FLIP_BACK_UNMATCHED = "FLIP_BACK_UNMATCHED";
export const MARK_MATCHED = "MARK_MATCHED";
export const RESET_CARDS = "RESET_CARDS";

const createCard = (cards, card, variant) => ({
  matchingId: cards.indexOf(card) + 1,
  uniqueId: `${cards.indexOf(card) + 1}${variant}`,
  imgFilename: card,
  randomFactor: Math.floor(Math.random() * 100) + 1,
  matched: false,
  flipped: false,
  lastFlippedTime: Date.now(),
});

//LOAD CARDS
export function loadCards(cards) {
  const cardData = {};
  cards.forEach((card) => {
    cardData[`${cards.indexOf(card) + 1}a`] = createCard(cards, card, "a");
    cardData[`${cards.indexOf(card) + 1}b`] = createCard(cards, card, "b");
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
export function flipBackUnmatched({ exceptOf, match }) {
  return {
    type: FLIP_BACK_UNMATCHED,
    exceptOf,
    match,
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

//RESET CARDS
export function resetCards() {
  return {
    type: RESET_CARDS,
  };
}
