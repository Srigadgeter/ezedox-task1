import React from "react";

import "./App.css";
import Star from "./Star";

const CARD_COUNT = 3;

const App = () => {
  const cardCreation = () => {
    var cards = [];
    for (let i = 1; i <= CARD_COUNT; i++) {
      cards.push(
        <div key={"card" + i} id={`card${i}`} className="cards">
          <p className="cardTitle">CARD {i}</p>
          <div className="cardText">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </div>
          <Star cardId={i} />
        </div>
      );
    }
    return cards;
  };

  return <div id="app">{cardCreation()}</div>;
};

export default App;
