import React from "react";
import Stats from "./Stats";

function Header(props) {
  const { title } = props;
  return (
    <header>
      <Stats className="stats" {...props} />
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
