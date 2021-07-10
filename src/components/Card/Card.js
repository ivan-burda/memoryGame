import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { flipCard, markMatched, flipBackUnmatched } from "../../actions/cards";
import { increaseFlipCount } from "../../actions/game";
import backImage from "../../media/back.png";

import classes from "./Card.module.css";

export default function Card({ uniqueId }) {
  const dispatch = useDispatch();
  const cardDetails = useSelector((state) => state.cards[`${uniqueId}`]);
  const cards = useSelector((state) => state.cards);
  const timerOn = useSelector((state) => state.timer.timerOn);
  const [image, setImage] = React.useState(backImage);
  const [classList, setClassList] = React.useState([classes.Card]);

  //Flips a card to show the image or reverts it to show the back
  React.useEffect(() => {
    (async () => {
      if (cardDetails.flipped === true) {
        await import(`../../media/${cardDetails.imgFilename}`).then((image) => {
          setImage(image.default);
          if (timerOn === true) {
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

  //If a match happens when the card gets flipped->request marking the pair as matched
  React.useEffect(() => {
    if (cards[uniqueId].flipped === true) {
      let relatedText = uniqueId.slice(-1);
      let relatedNumber = uniqueId.match(/\d+/)[0];
      let oppositeId = relatedNumber + (relatedText === "a" ? "b" : "a");
      if (cards[oppositeId].flipped === true) {
        dispatch(markMatched({ matched1: uniqueId, matched2: oppositeId }));
      }
    }
  }, [cards[uniqueId].flipped]);

  const triggerFlip = () => {
    dispatch(flipBackUnmatched({ exceptOf: uniqueId }));
    if (cardDetails.flipped === false) {
      dispatch(flipCard(cardDetails.uniqueId));
    }
  };

  return (
    <div className={classList.join(" ")}>
      <img src={image} alt="Memory card" onClick={() => triggerFlip()} />
    </div>
  );
}
