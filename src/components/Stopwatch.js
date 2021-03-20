import React, { useState } from "react";

function Stopwatch(props) {
  const [time, setTime] = useState(0);
  const { prop } = props;
  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{time}</span>
      <button>Start</button>
      <button>Reset</button>
    </div>
  );
}

export default Stopwatch;
