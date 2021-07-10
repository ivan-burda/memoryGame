import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../../actions/game";
import classes from "./NameInput.module.css";

export default function NameInput() {
  const dispatch = useDispatch();
  const [classList, setclassList] = React.useState([classes.NameInput]);
  const [inputfieldName, setInputfieldName] = React.useState("");
  const name = useSelector((state) => state.game.name);

  React.useEffect(() => {
    if (inputfieldName === "") {
      setclassList(classList.concat(classes.InputEmpty));
    } else {
      setclassList([classes.NameInput]);
    }
  }, [name]);

  return (
    <div>
      <input type="text" placeholder="Your name" className={classList.join(" ")} onChange={(e) => setInputfieldName(e.target.value)} onBlur={() => dispatch(setName(inputfieldName))} value={inputfieldName} />
    </div>
  );
}
