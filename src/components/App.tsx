import React, { useState } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

function App() {
  const [players, setPlayers] = useState([]);
  const [playerId, setPlayerId] = useState(0);

  const handleScoreChange = (id, addend) => {
    setPlayers((players) => {
      const clone = [...players];
      clone.find((player) => player.id === id).score += addend;
      return clone;
    });
  };

  const handleRemovePlayer = (id) =>
    setPlayers((players) => players.filter((playerObj) => playerObj.id !== id));

  const handleAddPlayer = (name) =>
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
        totalScore={[...players].reduce((acc, player) => acc + player.score, 0)}
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
