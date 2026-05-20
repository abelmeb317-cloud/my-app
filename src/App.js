import React, { useEffect, useState } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [status, setStatus] = useState({
    loading: true,
    error: null,
  });

  useEffect(() => {
    let ignore = false;

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        if (ignore) return;
        setMonsters(users);
        setStatus({ loading: false, error: null });
      })
      .catch((err) => {
        if (ignore) return;
        setStatus({
          loading: false,
          error: err?.message ?? "Failed to load",
        });
      });

    return () => {
      ignore = true;
    };
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()),
  );

  return (
    <div className="App">
      <header className="hero">
        <div className="hero__badge">Monster Rolodex</div>

        <h1 className="hero__title">Meet your new favorites 🧠</h1>

        <p className="hero__subtitle">Browse monsters fetched from an API.</p>

        <SearchBox
          placeholder="Search monsters..."
          onChangeHandler={(e) => setSearchField(e.target.value)}
        />
      </header>

      {status.loading ? (
        <div className="loading">Loading monsters...</div>
      ) : status.error ? (
        <div className="error">{status.error}</div>
      ) : (
        <CardList monsters={filteredMonsters} />
      )}
    </div>
  );
}
