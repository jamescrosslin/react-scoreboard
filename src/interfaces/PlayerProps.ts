interface PlayerProps {
  name: string;
  id: number;
  score: number;
  removePlayer: Function;
  changeScore: Function;
  leader: boolean;
}

export default PlayerProps;
