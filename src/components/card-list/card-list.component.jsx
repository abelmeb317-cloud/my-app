import React from "react";
import "./card.styles.css";
import { Card } from "./card.compnent";

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list" role="list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
