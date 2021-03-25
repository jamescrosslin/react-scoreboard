import { useState } from "react";
import { Provider } from "./Context";
import Header from "./Header";
import PlayerList from "./PlayerList";
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
    setPlayers((players) => players.filter((player) => player.id !== id));

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
    <Provider value={{ players, actions: { changeScore: handleScoreChange } }}>
      <div className="scoreboard">
        <Header />

        {/* Players List */}
        <PlayerList handleRemovePlayer={handleRemovePlayer} />
        <AddPlayerForm addPlayer={handleAddPlayer} />
      </div>
    </Provider>
  );
}

export default App;
