import React from "react";

function Search({onTextChange}) {
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onTextChange}
      />
    </div>
  );
}

export default Search;
