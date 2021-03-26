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

  const handleScoreChange = React.useCallback(
    (id: number, addend: number) => {
      /* handle score change code */
    },
    [setPlayers]
  );

  const handleRemovePlayer = React.useCallback(
    (id: number) => {
      /* handle remove player code */
    },
    [setPlayers]
  );

  const handleAddPlayer = React.useCallback(
    (id: number) => {
      /* handle add player code */
    },
    [setPlayers]
  );

  return { players, handleScoreChange, handleRemovePlayer, handleAddPlayer };
};
