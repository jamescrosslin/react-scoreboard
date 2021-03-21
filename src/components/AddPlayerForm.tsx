import React, { useState } from "react";

const AddPlayerForm = (props: { addPlayer: Function }) => {
  const { addPlayer } = props;
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = playerInput.current || { value: "" };
    addPlayer(input.value);
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
