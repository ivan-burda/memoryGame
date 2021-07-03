import React from "react";
import { useSelector } from "react-redux";
import back from "../../media/back.png";
import classes from "./Card.module.css";

export default function Card({ uniqueId }) {
  const cardDetails = useSelector((state) => state.cards[`${uniqueId}`]);
  const [image, setImage] = React.useState(back);

  const showImage = () => {
    setImage(`../../media/${cardDetails.imgFilename}.png`);
  };

  return (
    <div className={classes.Card}>
      <button type="button" onClick={() => showImage()}>
        <img src={image} alt="Memory card" />
      </button>
    </div>
  );
}
