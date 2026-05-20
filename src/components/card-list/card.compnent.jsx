import React from "react";
import "./card.styles.css";

export const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <article className="card" role="listitem" aria-label={`Monster: ${name}`}>
      <div className="card__avatar" aria-hidden="true">
        <img
          className="card__img"
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
      </div>

      <div className="card__body">
        <h2 className="card__name">{name}</h2>
        <p className="card__meta">
          <span className="card__label">Email:</span>{" "}
          <a className="card__link" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      </div>

      <div className="card__glow" aria-hidden="true" />
    </article>
  );
};
