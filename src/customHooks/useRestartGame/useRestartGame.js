import { useSelector, useDispatch } from "react-redux";

import { resetCards } from "../../actions/cards";
import { resetFlipCount } from "../../actions/game";
import { startTimer, resetTimer, pauseTimer } from "../../actions/timer";

import imgFilenames from "../../media/imgFilenames";

export const useRestartGame = () => {
  const dispatch = useDispatch();
  const pairCount = useSelector((state) => state.game.pairCount);

  const useRestartGame = () => {
    dispatch(pauseTimer());
    dispatch(resetTimer());
    dispatch(resetCards(imgFilenames(pairCount)));
    dispatch(resetFlipCount());
    dispatch(startTimer());
  };

  return useRestartGame;
};
