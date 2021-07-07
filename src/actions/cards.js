export const LOAD_CARDS = "LOAD_CARDS";
export const FLIP_CARD = "FLIP_CARD";
export const FLIP_BACK_UNMATCHED = "FLIP_BACK_UNMATCHED";
export const MARK_MATCHED = "MARK_MATCHED";
export const RESET_CARDS = "RESET_CARDS";

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
