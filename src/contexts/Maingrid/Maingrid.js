import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";

import classes from "./Maingrid.module.css";

export default function Maingrid() {
  const cards = Object.values(useSelector((state) => state.cards));
  if (cards.length === 0) {
    return <div>...</div>;
  } else {
    return (
      <div className={classes.Maingrid}>
        {" "}
        {cards.map((card) => (
          <Card uniqueId={card.uniqueId} key={card.uniqueId} />
        ))}
      </div>
    );
  }
}
