import React, { useState } from "react";

function Header(props) {
  const { title, totalPlayers } = props;
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  );
}

function Player(props) {
  const { name, removePlayer, id } = props;
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>
          ✖
        </button>
        {name}
      </span>
      <Counter />
    </div>
  );
}

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
