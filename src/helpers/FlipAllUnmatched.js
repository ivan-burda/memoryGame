import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function FlipAllUnmatched() {
  const cards = useSelector((state) => state.cards);
  console.log(cards);
  // if (Object.values(cards).length !== 0) {
  //   let flippedCards = Object.values(cards).filter((card) => card.flipped === true);
  //   if (flippedCards.length === 2) {
  //     if (flippedCards[0].matchingId === flippedCards[1].matchingId) {
  //       console.log("Its a match!");
  //     }
  //     //Flip back all cards which have not been matched
  //   }
  // }
  return <div></div>;
}
