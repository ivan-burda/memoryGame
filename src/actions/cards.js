export const LOAD_CARDS = "LOAD_CARDS";
export const UPDATE_CARD = "UPDATE_CARD";

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
    };
    cardData[`${cards.indexOf(card) + 1}b`] = {
      matchingId: cards.indexOf(card) + 1,
      uniqueId: `${cards.indexOf(card) + 1}b`,
      imgFilename: card,
      randomFactor: random(),
      matched: false,
    };
  });
  return {
    type: LOAD_CARDS,
    cards: cardData,
  };
}
