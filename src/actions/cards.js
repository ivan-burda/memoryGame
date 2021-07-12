export const LOAD_CARDS = "LOAD_CARDS";
export const FLIP_CARD = "FLIP_CARD";
export const FLIP_BACK_UNMATCHED_CARDS = "FLIP_BACK_UNMATCHED_CARDS";
export const MARK_MATCHED_CARDS = "MARK_MATCHED_CARDS";

//LOAD CARDS
export function loadCards(cards) {
  return {
    type: LOAD_CARDS,
    cards,
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
export function flipBackUnmatchedCards({ exceptOf, match }) {
  return {
    type: FLIP_BACK_UNMATCHED_CARDS,
    exceptOf,
    match,
  };
}

//MARK MATCHED
export function markMatchedCards({ matched1, matched2 }) {
  return {
    type: MARK_MATCHED_CARDS,
    matched1,
    matched2,
  };
}

//RESET CARDS
export function resetCards(cards) {
  return {
    type: LOAD_CARDS,
    cards,
  };
}
