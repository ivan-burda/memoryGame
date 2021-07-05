import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { flipCard, flipBackUnmatched, markMatched } from "../../actions/cards";
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

  React.useEffect(() => {
    if (cards[uniqueId].flipped === true) {
      let relatedText = uniqueId.slice(-1);
      let relatedNumber = uniqueId.match(/\d+/)[0];
      let oppositeId = relatedNumber + (relatedText === "a" ? "b" : "a");
      if (cards[oppositeId].flipped === true) {
        console.log("Its a match!");
        dispatch(markMatched({ matched1: uniqueId, matched2: oppositeId }));
      } else {
        //dispatch(flipBackUnmatched({ flipped1: "1a", flipped2: "1b" }));
      }
    }
  }, [cards[uniqueId].flipped]);

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
