import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

function Header(props) {
  const { title } = props;
  return (
    <header>
      <Stats className="stats" {...props} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
}

export default Header;
