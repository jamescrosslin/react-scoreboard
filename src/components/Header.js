import React from "react";

function Header(props) {
  const { title, totalPlayers } = props;
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  );
}

export default Header;
