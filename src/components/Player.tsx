import React from "react";
import Counter from "./Counter";
import PlayerProps from "../interfaces/PlayerProps";

const Player = (props: PlayerProps) => {
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
