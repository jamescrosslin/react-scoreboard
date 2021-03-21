import React from "react";
import Counter from "./Counter";

const Player = (props) => {
  const { name, removePlayer, id } = props;
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>
          ✖
        </button>
        {name}
      </span>
      <Counter {...props} />
    </div>
  );
};

export default Player;
