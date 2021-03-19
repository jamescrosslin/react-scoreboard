import React, { useState } from "react";
import Header from "./Header";
import Player from "./Player";

function App() {
  const playerArr = [
    { name: "Guil", id: 1, score: 0 },
    { name: "Treasure", id: 2, score: 0 },
    { name: "Ashley", id: 3, score: 0 },
    { name: "James", id: 4, score: 0 },
  ];

  const [players, setPlayers] = useState(playerArr);

  const handleScoreChange = (id, addend) => {
    setPlayers((players) => {
      const clone = [...players];
      clone.find((player) => player.id === id).score += addend;
      return clone;
    });
  };

  const handleRemovePlayer = (id) =>
    setPlayers((players) => players.filter((playerObj) => playerObj.id !== id));

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={players.length}
        totalScore={players.reduce((acc, player) => acc + player.score, 0)}
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
    </div>
  );
}

export default App;
