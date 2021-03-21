import React, { useState } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import PlayerData from "../interfaces/PlayerData";

function App() {
  const [players, setPlayers] = useState<PlayerData[]>([]);
  const [playerId, setPlayerId] = useState(0);

  const handleScoreChange = (id: number, addend: number) => {
    setPlayers((players) => {
      const clone: PlayerData[] = [...players];
      const player = clone.find((player) => player.id === id) || { score: 0 };
      player.score += addend;
      return clone;
    });
  };

  const handleRemovePlayer = (id: number) =>
    setPlayers((players) =>
      players.filter((playerObj: PlayerData) => playerObj.id !== id)
    );

  const handleAddPlayer = (name: string) =>
    setPlayers((players) => {
      const playerObj = {
        name,
        id: createId(),
        score: 0,
      };
      return [...players, playerObj];
    });

  const createId = () => {
    setPlayerId((id) => id + 1);
    return playerId;
  };

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={players.length}
        totalScore={[...players].reduce(
          (acc, player: PlayerData) => acc + player.score,
          0
        )}
      />

      {/* Players List */}
      {players.map((player) => (
        <Player
          {...player}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
        />
      ))}
      <AddPlayerForm addPlayer={handleAddPlayer} />
    </div>
  );
}

export default App;
