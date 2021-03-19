import React, { useState } from "react";
import Header from "./Header";
import Player from "./Player";

function App() {
  const playerArr = [
    { name: "Guil", id: 1 },
    { name: "Treasure", id: 2 },
    { name: "Ashley", id: 3 },
    { name: "James", id: 4 },
  ];

  const [players, setPlayers] = useState(playerArr);

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={players.length} />

      {/* Players List */}
      {players.map(({ name, id }) => (
        <Player
          name={name}
          id={id}
          key={id.toString()}
          removePlayer={() =>
            setPlayers((players) =>
              players.filter((player) => player.id !== id)
            )
          }
        />
      ))}
    </div>
  );
}

export default App;
