import React, { Children } from "react";
import PlayerData from "../../interfaces/PlayerData";

type ContextType = {
  players: PlayerData[];
  actions: {
    changeScore: Function;
  };
};

const ScoreboardContext = React.createContext<Partial<ContextType>>({});

const Provider = ScoreboardContext.Provider;
const Consumer = ScoreboardContext.Consumer;

export { Provider, Consumer };
