import React from "react";
import PlayerProps from "../interfaces/PlayerProps";

const Counter = (props: PlayerProps) => {
  const { id, score, changeScore } = props;
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => changeScore(id, -1)}
      >
        -
      </button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => changeScore(id, 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
