import React from "react";
import classes from "./Button.module.css";

export default function Button({title, action, disableMe}) {
  const [classList, setClassList] = React.useState([classes.Button])

  React.useEffect(()=>{
    if(disableMe){
      setClassList(classList.concat(classes.Disabled))
    } else{
      setClassList(classList.filter((item) => item !== classes.Disabled));
    }
  },[disableMe]);

  return (
    <button type="button" onClick={action} className={classList.join(" ")} disabled={disableMe}>
      {title}
    </button>
  );
}
