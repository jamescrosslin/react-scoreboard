import React, { useState } from "react";

function AddPlayerForm({ addPlayer }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(playerInput.current.value);
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
}

export default AddPlayerForm;
