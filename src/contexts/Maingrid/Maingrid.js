import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showCongrats } from "../../actions/game";
import { pauseTimer, startTimer } from "../../actions/timer";
import Card from "../../components/Card/Card";
import Congratulations from "../../components/Congratulations/Congratulations";
import NameInput from "../../components/NameInput/NameInput";

import classes from "./Maingrid.module.css";

export default function Maingrid() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.game.name);
  const cards = Object.values(useSelector((state) => state.cards)).sort((a, b) => a.randomFactor - b.randomFactor);
  const congratulate = useSelector((state) => state.game.showCongrats);

  //Shows or hides congrats depneding whether all cards are matched
  React.useEffect(() => {
    if (cards.length > 0) {
      let areAllCardsMatched = cards.every((card) => card.matched === true);
      dispatch(showCongrats(areAllCardsMatched));
      //If all matched - stop timer
      if (areAllCardsMatched) {
        dispatch(dispatch(pauseTimer()));
      }
    }
  }, [cards]);

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
        {congratulate === true ? <Congratulations /> : null}
        {cards.map((card) => (
          <Card uniqueId={card.uniqueId} key={card.uniqueId} />
        ))}
      </div>
    );
  }
}
