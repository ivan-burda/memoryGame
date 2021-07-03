import React from "react";
import { useSelector } from "react-redux";
import backImage from "../../media/back.png";
import classes from "./Card.module.css";

export default function Card({ uniqueId }) {
  const cardDetails = useSelector((state) => state.cards[`${uniqueId}`]);
  const [image, setImage] = React.useState(backImage);

  const showImage = async () => {
    const myImage = await import(`../../media/${cardDetails.imgFilename}`).then((image) => {
      setImage(image.default);
    });
  };

  return (
    <div className={classes.Card}>
      <img src={image} alt="Memory card" onClick={() => showImage()} />
    </div>
  );
}
