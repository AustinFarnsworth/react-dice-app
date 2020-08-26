import React from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  const [numberOfSides, setNumberOfSides] = React.useState(6);
  const [diceBag, setDiceBag] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const exisistingDiceBag = diceBag.slice();
    exisistingDiceBag.push(Number(numberOfSides));
    setDiceBag(exisistingDiceBag);
  }

  return (
    <div className="App">
      <h1>My React Dice Bag</h1>
      <form onSubmit={handleSubmit}>
        <h3>Create A New Die</h3>
        <label>
          Number of Sides:
          <input
            type="number"
            value={numberOfSides}
            onChange={(e) => setNumberOfSides(e.target.value)}
          />
        </label>
        <button>Create</button>
      </form>
      <h3>Dice Bag:</h3>
      {diceBag.map((dieSides) => {
        return <Die numberOfSides={dieSides} />;
      })}
    </div>
  );
}

export default App;
