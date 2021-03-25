import React from "react";
import PlayerProps from "../interfaces/PlayerProps";
import { Consumer } from "./Context";

const Counter = (props: PlayerProps) => {
  const { id, score } = props;
  return (
    <Consumer>
      {(context) => {
        const { actions } = context;
        return (
          <div className="counter">
            <button
              className="counter-action decrement"
              onClick={() => actions?.changeScore(id, -1)}
            >
              -
            </button>
            <span className="counter-score">{score}</span>
            <button
              className="counter-action increment"
              onClick={() => actions?.changeScore(id, 1)}
            >
              +
            </button>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Counter;
