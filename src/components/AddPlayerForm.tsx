import React from "react";
import { usePlayers } from "./Context";

const AddPlayerForm = () => {
  const { handleAddPlayer } = usePlayers();
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = playerInput.current || { value: "" };
    handleAddPlayer(input.value);
    e.currentTarget.reset();
  };

  const playerInput = React.createRef<HTMLInputElement>();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={playerInput}
        placeholder="Enter a player's name"
      />

      <input type="submit" value="Add Player" />
    </form>
  );
};

export default AddPlayerForm;
