import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { loadCards } from "../../actions/cards";
import { saveLastLocation } from "../../actions/game";
import imgFilenames from "../../media/imgFilenames";

import Card from "../../components/Card/Card";
import NameInput from "../../components/NameInput/NameInput";

import classes from "./Maingrid.module.css";

export default function Maingrid() {
  const dispatch = useDispatch();

  const cards = Object.values(useSelector((state) => state.cards)).sort((a, b) => a.randomFactor - b.randomFactor);
  const pairCount = useSelector((state) => state.game.pairCount);
  const name = useSelector((state) => state.game.name);
  const lastLocation = useSelector((state) => state.game.lastLocation);

  React.useEffect(() => {
    //If there is a player's name and if the user is not returning from "Leaderboard" then load the cards
    if (name !== "" && lastLocation !== "/leaderboard") {
      dispatch(loadCards(imgFilenames(pairCount)));
    }
    //Lets make sure that if lastLocation is "/leaderboard" it gets set again to "/" so that flip count incresing in the Card component is enabled
    dispatch(saveLastLocation("/"));
  }, [name, pairCount]);

  //Returning the UI
  //Ask player for name if unknown
  if (name === "") {
    return <NameInput />;
  }
  //Displays the cards
  else if (cards.length === 0) {
    return <div>No cards available yet</div>;
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
