import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { loadCards } from "../../actions/cards";
import imgFilenames from "../../media/imgFilenames";

import Card from "../../components/Card/Card";
import NameInput from "../../components/NameInput/NameInput";

import classes from "./Maingrid.module.css";

export default function Maingrid() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.game.name);
  const pairCount = useSelector((state) => state.game.pairCount);
  const cards = Object.values(useSelector((state) => state.cards)).sort((a, b) => a.randomFactor - b.randomFactor);

  React.useEffect(() => {
    if (name !== "") {
      dispatch(loadCards(imgFilenames(pairCount)));
    }
  }, [name, dispatch, pairCount]);

  //Ask player for name if unknown
  if (name === "") {
    return <NameInput />;
  }

  //Displays the cards
  else if (cards.length === 0) {
    return <div>...</div>;
  } else {
    return (
      <div className={classes.Maingrid}>
        {cards.map((card) => (
          <Card uniqueId={card.uniqueId} key={card.uniqueId} />
        ))}
      </div>
    );
  }
}
