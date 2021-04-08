import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchBar = ({ searchValue, handleChange }) => {
  return (
    <label>
      <FontAwesomeIcon icon={faSearch} />
      <input
        className="search_bar"
        value={searchValue}
        onChange={handleChange}
      ></input>
    </label>
  );
};

export default SearchBar;
