import React from "react";
import Player from "./Player";
import PlayerData from "../interfaces/PlayerData";
import { Consumer } from "./Context";

interface IPlayerList {
  handleRemovePlayer: Function;
}

function PlayerList(props: IPlayerList) {
  const { handleRemovePlayer } = props;
  return (
    <Consumer>
      {({ players }) => {
        const highScore = Math.max(...players.map((player) => player.score));
        return (
          <React.Fragment>
            {players.map((player) => (
              <Player
                {...player}
                leader={player.score === highScore && highScore > 0}
                key={player.id.toString()}
                removePlayer={handleRemovePlayer}
              />
            ))}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
}

export default PlayerList;
