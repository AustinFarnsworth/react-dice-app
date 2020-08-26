import React from "react";
import "./Die.css";

function Die({ numberOfSides }) {
  const [result, setResult] = React.useState();

  function handleRoll() {
    const min = Math.ceil(1);
    const max = Math.floor(numberOfSides);
    const result = Math.floor(Math.random() * (max - min + 1) + min);

    setResult(result);
  }

  return (
    <div classname="die-container">
      {numberOfSides}
      <div>Sides: {numberOfSides}</div>
      <button onClick={handleRoll}>Roll</button>
      <div>Result: {result}</div>
    </div>
  );
}

export default Die;
