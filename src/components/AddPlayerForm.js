import React, { useState } from "react";

function AddPlayerForm(props) {
  const [nameField, setNameField] = useState("");
  const {addPlayer} = props;
  const handleNameFieldChange = (e) => setNameField(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(nameField)
    setNameField("");
  };

  // const { prop } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        value={nameField}
        onChange={handleNameFieldChange}
        placeholder="Enter a player's name"
      />

      <input type="submit" value="Add Player" />
    </form>
  );
}

export default AddPlayerForm;
