import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { flipCard, flipBackUnmatched } from "../../actions/cards";
import backImage from "../../media/back.png";

import classes from "./Card.module.css";

export default function Card({ uniqueId }) {
  const dispatch = useDispatch();
  const cardDetails = useSelector((state) => state.cards[`${uniqueId}`]);
  const cards = useSelector((state) => state.cards);
  const [image, setImage] = React.useState(backImage);

  React.useEffect(() => {
    controlCardDisplay();
  }, [cardDetails.flipped]);

  const controlCardDisplay = async () => {
    if (cardDetails.flipped === true) {
      await import(`../../media/${cardDetails.imgFilename}`).then((image) => {
        setImage(image.default);
      });
    } else {
      setImage(backImage);
    }
  };

  React.useEffect(() => {});

  const evaluateFlip = () => {
    if (Object.values(cards).length !== 0) {
      let flippedUnmatchedCards = Object.values(cards).filter((card) => card.flipped === true && card.matched === false);
      console.log(flippedUnmatchedCards);
      if (flippedUnmatchedCards.length === 2) {
        console.log(flippedUnmatchedCards);
        if (flippedUnmatchedCards[0].matchingId === flippedUnmatchedCards[1].matchingId) {
          console.log("Its a match!");
        } else {
          //Flip back all cards which have not been matched
          dispatch(flipBackUnmatched({ flipped1: flippedUnmatchedCards[0].uniqueId, flipped2: flippedUnmatchedCards[1].uniqueId }));
        }
      }
    }
  };

  const triggerFlip = () => {
    if (cardDetails.flipped === false) {
      dispatch(flipCard(cardDetails.uniqueId));
    }
  };

  return (
    <div className={classes.Card}>
      <img src={image} alt="Memory card" onClick={() => triggerFlip()} />
    </div>
  );
}
