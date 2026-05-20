import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ placeholder, onChangeHandler }) => (
  <input
    className="search-box"
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);
