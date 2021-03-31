import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchBar = ({ filterCards }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
    filterCards(searchValue);
  };

  return (
    <label>
      <FontAwesomeIcon icon={faSearch} />
      <input value={searchValue} onChange={handleChange}></input>
    </label>
  );
};

export default SearchBar;
