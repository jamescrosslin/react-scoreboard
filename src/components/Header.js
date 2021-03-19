import React from "react";
import Stats from "./Stats";

function Header(props) {
  const { title } = props;
  return (
    <header>
      <h1>{title}</h1>
      <Stats className="stats" {...props} />
    </header>
  );
}

export default Header;
