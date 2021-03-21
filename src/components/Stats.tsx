import React from "react";
import HeaderProps from "../interfaces/HeaderProps";

function Stats(props: HeaderProps) {
  const { totalPlayers, totalScore } = props;
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Stats;
