import React, { PropsWithChildren } from "react";
import PlayerData from "../../interfaces/PlayerData";

type ContextType = {
  players: PlayerData[];
  setPlayers: React.Dispatch<React.SetStateAction<PlayerData[]>>;
};

const PlayersContext = React.createContext<ContextType>({
  players: [],
  setPlayers: () => {},
});

export const PlayersProvider = ({ children }: PropsWithChildren<{}>) => {
  const [players, setPlayers] = React.useState([]);
  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayersContext.Provider>
  );
};

export const usePlayers = () => {
  const { players, setPlayers } = React.useContext(PlayersContext);

  const [playerId, setPlayerId] = React.useState(0);

  const handleScoreChange = React.useCallback(
    (id: number, addend: number) => {
      setPlayers((players) => {
        const clone: PlayerData[] = [...players];
        const player = clone.find((player) => player.id === id) || { score: 0 };
        player.score += addend;
        return clone;
      });
    },
    [setPlayers]
  );

  const handleRemovePlayer = React.useCallback(
    (id: number) => {
      setPlayers((players) => players.filter((player) => player.id !== id));
    },
    [setPlayers]
  );

  const handleAddPlayer = React.useCallback(
    (name: string) => {
      setPlayers((players) => {
        const playerObj = {
          name,
          id: createId(),
          score: 0,
        };
        return [...players, playerObj];
      });
    },
    [setPlayers]
  );

  const createId = () => {
    setPlayerId((id) => id + 1);
    return playerId;
  };

  return { players, handleScoreChange, handleRemovePlayer, handleAddPlayer };
};
