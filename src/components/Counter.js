import React, { useState } from "react";

function Counter() {
  const [score, setScore] = useState(0);

  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => setScore((score) => score - 1)}
      >
        -
      </button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => setScore((score) => score + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
