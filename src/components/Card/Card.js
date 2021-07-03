import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { flipCard } from "../../actions/cards";
import FlipAllUnmatched from "../../helpers/FlipAllUnmatched";
import backImage from "../../media/back.png";

import classes from "./Card.module.css";

export default function Card({ uniqueId }) {
  const dispatch = useDispatch();
  const cardDetails = useSelector((state) => state.cards[`${uniqueId}`]);
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

  const triggerFlip = () => {
    if (cardDetails.flipped === false) {
      dispatch(flipCard(cardDetails.uniqueId));
      FlipAllUnmatched();
    }
  };

  return (
    <div className={classes.Card}>
      <img src={image} alt="Memory card" onClick={() => triggerFlip()} />
    </div>
  );
}
