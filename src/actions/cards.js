export const LOAD_CARDS = "LOAD_CARDS";
export const UPDATE_CARD = "UPDATE_CARD";

//LOAD CARDS
export function loadCards(cards) {
  const cardData = {};
  cards.forEach((card) => {
    cardData[`${cards.indexOf(card) + 1}a`] = {
      matchingId: cards.indexOf(card) + 1,
      uniqueId: `${cards.indexOf(card) + 1}a`,
      imgFilename: card,
    };
    cardData[`${cards.indexOf(card) + 1}b`] = {
      matchingId: cards.indexOf(card) + 1,
      uniqueId: `${cards.indexOf(card) + 1}b`,
      imgFilename: card,
    };
  });
  return {
    type: LOAD_CARDS,
    cards: cardData,
  };
}
