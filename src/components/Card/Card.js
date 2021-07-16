import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { flipCard, markMatchedCards, flipBackUnmatchedCards } from "../../actions/cards";
import { increaseFlipCount, saveLastLocation } from "../../actions/game";
import backImage from "../../media/back.png";

import classes from "./Card.module.css";

export default function Card({ uniqueId }) {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  const cardDetails = useSelector((state) => state.cards[`${uniqueId}`]);
  const timerOn = useSelector((state) => state.timer.timerOn);
  const lastLocation = useSelector((state) => state.game.lastLocation);

  const [image, setImage] = React.useState(backImage);
  const [classList, setClassList] = React.useState([classes.Card]);

  //Flips a card to show the image or revert it to show the back
  React.useEffect(() => {
    (async () => {
      if (cardDetails.flipped === true) {
        await import(`../../media/${cardDetails.imgFilename}`).then((image) => {
          setImage(image.default);
          //If time is running the lasLocation is current, not "/leaderboard" then allow increasing of the flip total count
          if (timerOn === true && lastLocation === "/") {
            dispatch(increaseFlipCount());
          }
        });
      } else {
        setImage(backImage);
      }
    })();
  }, [cardDetails.flipped, dispatch, cardDetails.imgFilename]);

  //Applies styling to a matched card
  React.useEffect(() => {
    if (cardDetails.matched) {
      setClassList(classList.concat(classes.Matched));
    } else {
      setClassList(classList.filter((item) => item !== classes.Matched));
    }
  }, [cardDetails.matched]);

  //If a match happens when the card gets flipped -> request marking the pair as matched
  React.useEffect(() => {
    if (cards[uniqueId].flipped === true) {
      let cardLetter = uniqueId.slice(-1); //e.g. 1a => a
      let cardNumber = uniqueId.match(/\d+/)[0]; //e.g. 1a => 1
      let relatedCardUniqueId = cardNumber + (cardLetter === "a" ? "b" : "a"); //e.g. 1a => 1b
      if (cards[relatedCardUniqueId].flipped === true) {
        dispatch(markMatchedCards({ matched1: uniqueId, matched2: relatedCardUniqueId }));
      }
    }
  }, [cards[uniqueId].flipped]);

  const triggerFlip = () => {
    dispatch(flipBackUnmatchedCards({ exceptOf: uniqueId }));
    if (cardDetails.flipped === false) {
      dispatch(flipCard(cardDetails.uniqueId));
    }
  };

  return (
      <button type="button" className={classList.join(" ")} onClick={() => triggerFlip()}>
      <img src={image} alt="Memory card" draggable="false" />
      </button>
  );
}
