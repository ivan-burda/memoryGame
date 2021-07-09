import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showCongrats } from "../../actions/game";
import { pauseTimer } from "../../actions/timer";
import Card from "../../components/Card/Card";
import Congratulations from "../../components/Congratulations/Congratulations";

import classes from "./Maingrid.module.css";

export default function Maingrid() {
  const dispatch = useDispatch();
  const congratulate = useSelector((state) => state.game.showCongrats);
  const cards = Object.values(useSelector((state) => state.cards)).sort((a, b) => a.randomFactor - b.randomFactor);

  //Triggers congratulations if all cards are matched
  React.useEffect(() => {
    if (cards.length > 0) {
      let areAllCardsMatched = cards.every((card) => card.matched === true);
      dispatch(showCongrats(areAllCardsMatched));
      if (areAllCardsMatched) {
        dispatch(dispatch(pauseTimer()));
      }
    }
  }, [cards]);

  if (cards.length === 0) {
    return <div>...</div>;
  } else {
    return (
      <div className={classes.Maingrid}>
        {congratulate === true ? <Congratulations /> : null}
        {cards.map((card) => (
          <Card uniqueId={card.uniqueId} key={card.uniqueId} />
        ))}
      </div>
    );
  }
}
